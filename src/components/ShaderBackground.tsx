import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 a_pos;
void main(){ gl_Position = vec4(a_pos,0.0,1.0); }
`;

const FRAG = `#version 300 es
precision highp float;
out vec4 outColor;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_aspect;

float hash21(vec2 p){
  p = fract(p*vec2(123.34, 456.21));
  p += dot(p, p+45.32);
  return fract(p.x*p.y);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv - 0.5;
  p.x *= u_aspect;
  vec2 m = u_mouse - 0.5; m.x *= u_aspect;

  float t = u_time * 0.08;

  vec2 dir = p - m;
  float d = length(dir);
  vec2 warp = -dir * exp(-d*1.8) * 0.18;

  vec2 q = p + warp;
  float band = 0.0;
  band += sin(q.y * 6.5 + sin(q.x*2.2 + t*1.1)*1.2 + t*0.9);
  band += sin(q.y * 4.0 - q.x*1.5 + t*0.7) * 0.8;
  band += sin(length(q)*5.0 - t*1.3) * 0.5;

  float n = band * 0.25 + 0.5;
  float band2 = sin(q.x * 3.0 + t * 0.6) * 0.5 + 0.5;

  vec3 c1 = vec3(0.14, 0.17, 0.23);
  vec3 c2 = vec3(0.32, 0.34, 0.42);
  vec3 c3 = vec3(0.20, 0.22, 0.32);
  vec3 col = mix(c1, c2, n);
  col = mix(col, c3, band2 * 0.55);

  float bright = smoothstep(0.15, 0.85, n);
  col *= 0.30 + bright * 0.90;

  col += vec3(0.95) * exp(-d*4.5) * 0.10;

  float g = hash21(gl_FragCoord.xy * 0.5 + u_time);
  col += (g - 0.5) * 0.020;

  col *= smoothstep(1.6, 0.2, length(p));

  outColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
  }
  return s;
}

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { antialias: false });
    if (!gl) {
      canvas.style.background = '#1a1d24';
      return;
    }

    const v = compile(gl, gl.VERTEX_SHADER, VERT);
    const f = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram()!;
    gl.attachShader(program, v);
    gl.attachShader(program, f);
    gl.linkProgram(program);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uAspect = gl.getUniformLocation(program, 'u_aspect');

    const state = {
      mouse: { x: 0.5, y: 0.5 },
      target: { x: 0.5, y: 0.5 },
      start: performance.now(),
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
    };

    function resize() {
      const w = (window.innerWidth * state.dpr) | 0;
      const h = (window.innerHeight * state.dpr) | 0;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
      canvas!.style.width = window.innerWidth + 'px';
      canvas!.style.height = window.innerHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      state.target.x = e.clientX / window.innerWidth;
      state.target.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMouseMove);

    let rafId: number;
    function frame() {
      const t = (performance.now() - state.start) / 1000;
      state.mouse.x += (state.target.x - state.mouse.x) * 0.05;
      state.mouse.y += (state.target.y - state.mouse.y) * 0.05;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.useProgram(program);
      gl!.uniform1f(uTime, t);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform2f(uMouse, state.mouse.x, state.mouse.y);
      gl!.uniform1f(uAspect, canvas!.width / canvas!.height);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="bgCanvas" />;
}
