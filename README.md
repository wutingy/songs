# Handoff: Songbook (Bilingual Lyrics Reader)

## Deployment

- Framework: Vite + React + TypeScript
- Deployed to GitHub Pages via `npm run deploy`
- Live URL: `wutingy.com/songs/` (custom domain `wutingy.com` is set on the main GitHub Pages account, so project repos resolve as subpaths)
- `vite.config.ts` has `base: '/songs/'` — do not change unless the custom domain is moved to this repo directly

## Overview

A personal-use website for reading album lyrics with side-by-side bilingual translations (English original + Traditional Chinese). Built because Apple Music's auto-scrolling lyric view is uncomfortable for close reading. The site emphasizes a calm, literary reading experience over functional UI tropes.

The hero visual element is an animated **shader background** — a slow, muted "plasma aurora" that drifts behind translucent reading panels and reacts subtly to mouse position.

## About the Design Files

The files in `reference/` are **design references created in HTML** — a working prototype showing intended look and behavior, not production code to copy verbatim. Recreate this design in the target codebase using its established patterns and libraries (React/Vue/Next.js/etc.). The reference HTML is self-contained vanilla JS for portability; in production, idiomatic component decomposition is expected.

## Fidelity

**High-fidelity.** Colors, typography, spacing, animations, and the WebGL shader are all production-intent. Recreate pixel-perfectly. The shader fragment program in `songbook-bg.js` should be ported as-is to the target stack (GLSL is universal — wrap in whatever WebGL/Three.js/regl integration you prefer).

---

## Information Architecture

```
/                              → Home (empty / placeholder)
/album/<album-slug>            → Album page (lyrics + TOC)
/album/<album-slug>#<song>     → Album page, scrolled to specific song
```

The reference uses a hash-based router for simplicity (`#<album-slug>/<song-slug>`); reimplement with the framework's idiomatic routing.

---

## Screens

### 1. Shell (persistent layout)

Two-column CSS grid, full viewport. Sidebar fixed-width, main scrolls.

- **Grid**: `grid-template-columns: 280px 1fr` (expanded) / `60px 1fr` (collapsed)
- **Transition**: `280ms cubic-bezier(0.2, 0.7, 0.1, 1)` on column-width change
- **Background**: A fixed `<canvas>` at z-index 0 fills the viewport; a radial-gradient overlay (`body::after`, z-index 1) darkens edges; app shell sits at z-index 2.

#### Sidebar
- **Background**: `rgba(16, 19, 25, 0.62)` + `backdrop-filter: blur(20px) saturate(120%)`
- **Border-right**: 1px `rgba(255,255,255,0.08)`
- **Header bar**: 22px top / 18px sides padding; bottom 1px divider.
  - **Toggle button** (☰): 28×28, 1px border, mono font 14px. Hover: border `rgba(255,255,255,0.16)`.
  - **Brand**: "SONGBOOK", mono 11px, letter-spacing 0.22em, uppercase. Fades to opacity 0 when collapsed (200ms).
- **Groups**:
  - `<h-?>` Group header: "ALBUMS" label (mono 10px, letter-spacing 0.22em, color `rgba(180,188,200,0.62)`) + chevron `▾`. Clicking the header collapses the group (chevron rotates -90°, list `display: none`).
- **Album entries** (list items):
  - 38×38 rounded-4px cover thumbnail (gradient placeholder — see Tokens). 1px border, soft drop shadow.
  - Album title (Crimson Pro 15px, weight 500)
  - Sub-line (JetBrains Mono 10px, muted, format: `Artist · Year`)
  - Hover: `rgba(255,255,255,0.04)` background. Active: `rgba(255,255,255,0.06)`.

**Collapse persistence**: stored in `localStorage` (`songbook.sidebar.collapsed` and `songbook.albumGroup.collapsed`, values `'1'`/`'0'`).

### 2. Home (empty state)

Centered vertically and horizontally:
- A single glyph `⌁` (Crimson Pro 56px weight 200, color `rgba(217, 195, 158, 0.55)`)
- Below: `"SELECT AN ALBUM FROM THE SIDEBAR"` — mono 11px, letter-spacing 0.22em, color `rgba(180, 188, 200, 0.62)`.

No other UI. The shader background carries the page.

### 3. Album Page

Two horizontal regions: **header** (album info) and **body** (TOC + lyrics).

- **Page wrapper**: max-width 1280px, centered, padding `56px 56px 120px` (top, sides, bottom).

#### Album Header
- 2-column grid: `140px 1fr`, gap 28px, aligned center.
- 140×140 album cover (rounded 6px, 1px border, soft shadow). Same gradient placeholder as sidebar. Contains artist initials (mono 28px, color `rgba(255,255,255,0.7)`) centered.
- Right column:
  - `"ALBUM"` tag — mono 10px, letter-spacing 0.22em, color `var(--accent)` (parchment)
  - **H1**: Album title — Crimson Pro 48px weight 500, line-height 1.05, letter-spacing -0.005em
  - Byline: `Artist · Year · N tracks` — mono 12px, muted
- Bottom border 1px, padding-bottom 36px.

#### Album Body
- 2-column grid: `240px 1fr`, gap 56px, items aligned to start.
- Top margin 24px from header divider.

##### TOC (left column)
- `position: sticky; top: 32px; max-height: calc(100vh - 64px); overflow-y: auto`.
- "TRACKS" label — mono 10px, letter-spacing 0.22em, padding-left 12px, margin-bottom 14px.
- `<ol>` list:
  - 1px left border `rgba(255,255,255,0.08)` runs the full list height.
  - Each item: padding `9px 12px`, gap 10px (number → text), left-border 2px transparent (becomes accent when active).
  - Track number (mono 10px, color `rgba(150,160,175,0.48)`) — turns parchment when active.
  - Title (Crimson Pro 14px) + Chinese title (Noto Serif TC 11px, muted) stacked.
- **Active state**: text turns `var(--fg)`, left border becomes `var(--accent)` (parchment), background a subtle horizontal gradient `linear-gradient(90deg, rgba(217, 195, 158, 0.06), transparent 60%)`.

##### Songs (right column)
- `max-width: 720px`. Each `<section class="song">` separated by 88px.
- **Song header**: 32px bottom margin, 18px bottom padding, 1px bottom border.
  - Grid: `auto 1fr`, two rows, column-gap 16px.
  - Track number spans both rows, mono 11px, letter-spacing 0.16em, padding-top 12px.
  - Title (Crimson Pro 32px weight 500, line-height 1.1)
  - Chinese title (Noto Serif TC 15px muted, margin-top 4px)
- **Lyrics**: flex column, gap 28px between stanzas.
  - **Stanza**: flex column, gap 14px between lines.
  - **Line**: flex column, gap 3px.
    - English: Crimson Pro 20px, line-height 1.45, color `var(--fg)`, `text-wrap: pretty`.
    - Chinese: Noto Serif TC 15px, line-height 1.6, color `var(--muted)`, `text-wrap: pretty`.

---

## Interactions & Behavior

### Sidebar collapse
- Click ☰ → toggles `body.sidebar-collapsed` class. CSS handles the grid-width transition + opacity fade of text labels.
- State persisted in `localStorage`.

### Album group collapse
- Click the "ALBUMS" group header → toggles `#sidebar.group-collapsed`. Chevron rotates, list hides.

### TOC scrollspy
- Use `IntersectionObserver` against the `#main` scroll container (NOT the window).
- `rootMargin: '-80px 0px -55% 0px'` (active band is the top portion of the viewport)
- On each callback: pick the visible song whose `boundingClientRect.top` is closest to 80px, mark its TOC item `.active`, and update URL hash to `#<album-slug>/<song-slug>` via `history.replaceState` (no scroll jump).

### TOC click → scroll
- Prevent default, smooth-scroll `#main` to the song with a 24px top offset.
- Update URL via `history.replaceState`.
- Do NOT trigger a re-render; the scroll handler updates the active state naturally.

### Routing
- On `hashchange`: re-render only if the **album slug** part changed. Within-album song changes do not re-render.
- On initial load, if URL hash contains `#<album>/<song>`, render the album then immediately scroll to the song (use `requestAnimationFrame` to wait for layout).

### Background shader
- Subtle mouse-reactivity: cursor causes a gentle warp in the field (very low intensity — should never distract).
- Mouse easing factor: 0.05 (slow follow).
- Renders continuously at requestAnimationFrame rate.
- DPR clamped to 1.5 max for performance.

---

## Background Shader

WebGL2 fragment shader. Full source in `reference/songbook-bg.js`.

**Concept**: Layered sine fields ("plasma bands") in a desaturated dusk palette, gently warped around the mouse position. Slow time multiplier (0.08x) so motion is barely perceptible.

**Uniforms**:
- `u_time` — seconds since start (float)
- `u_res` — canvas resolution in device pixels (vec2)
- `u_mouse` — mouse in 0..1 normalized coords (vec2; lerped, not raw)
- `u_aspect` — width / height (float)

**Palette** (mix of three muted colors):
- `c1 = vec3(0.14, 0.17, 0.23)` — slate
- `c2 = vec3(0.32, 0.34, 0.42)` — warm gray
- `c3 = vec3(0.20, 0.22, 0.32)` — dusk indigo

**Post**:
- Brightness modulation by smoothstep of band intensity
- Soft cursor highlight (0.10 strength)
- Film grain (`(hash - 0.5) * 0.020`)
- Vignette: `smoothstep(1.6, 0.2, length(p))`

For target stack: port the GLSL verbatim into your WebGL setup. If using Three.js, this is a single `ShaderMaterial` on a full-screen quad. If using `react-three-fiber`, a `<shaderMaterial>` on a `<mesh>` with `<planeGeometry args={[2,2]} />`.

---

## Design Tokens

### Colors

```
--bg:               #14171d
--surface:          rgba(16, 19, 25, 0.62)    /* sidebar bg */
--surface-strong:   rgba(13, 16, 22, 0.78)
--line:             rgba(255, 255, 255, 0.08)
--line-strong:      rgba(255, 255, 255, 0.16)
--fg:               rgba(238, 240, 244, 0.96)
--fg-soft:          rgba(220, 224, 232, 0.82)
--muted:            rgba(180, 188, 200, 0.62)
--muted-2:          rgba(150, 160, 175, 0.48)
--accent:           #d9c39e                   /* parchment, single accent */
--accent-dim:       rgba(217, 195, 158, 0.55)
```

### Typography

| Token       | Family                                            | Use |
|---           |---                                                |---|
| `--serif`    | Crimson Pro, Noto Serif TC, Georgia, serif        | English body + titles |
| `--serif-tc` | Noto Serif TC, Crimson Pro, Georgia, serif        | Chinese body + titles |
| `--mono`     | JetBrains Mono, ui-monospace, monospace           | UI chrome, labels, numbers |

Google Fonts import:
```
family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500
family=JetBrains+Mono:wght@400;500
family=Noto+Serif+TC:wght@400;500;600
```

#### Scale
| Element              | Family   | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Album H1             | Serif    | 48px | 500    | 1.05        | -0.005em |
| Song title           | Serif    | 32px | 500    | 1.10        | -0.005em |
| Song title (zh)      | Serif TC | 15px | 400    | 1.4         | 0.02em |
| Lyric line (en)      | Serif    | 20px | 400    | 1.45        | — |
| Lyric line (zh)      | Serif TC | 15px | 400    | 1.6         | — |
| TOC title            | Serif    | 14px | 400    | 1.25        | 0.005em |
| TOC title (zh)       | Serif TC | 11px | 400    | 1.3         | — |
| Album sub / byline   | Mono     | 12px | 400    | —           | 0.06em |
| Tag / label          | Mono     | 10px | 400    | —           | 0.22em (uppercase) |
| Sidebar brand        | Mono     | 11px | 500    | —           | 0.22em (uppercase) |
| Home hint            | Mono     | 11px | 400    | —           | 0.22em (uppercase) |

### Spacing
- Album page padding: `56px 56px 120px`
- Album header → body gap: `24px` + 36px bottom-padding on header
- Album body grid gap: `56px`
- Songs spacing: `88px` between songs
- Stanza gap: `28px`
- Line-pair gap (en/zh inside a line): `3px`
- Line gap inside stanza: `14px`

### Radii / Borders / Shadows
- Sidebar items / album link: `8px` radius
- Album cover (small): `4px` radius, 1px border, `box-shadow: 0 2px 8px rgba(0,0,0,0.25)`
- Album cover (large): `6px` radius, 1px border, `box-shadow: 0 18px 50px -10px rgba(0,0,0,0.5)`
- Toggle button: `6px` radius

### Sidebar widths
- Expanded: `280px`
- Collapsed: `60px`

### Album cover placeholders
Gradient placeholder, since real cover art is TBD:
```
background: linear-gradient(135deg, <album.color>aa, <album.color>55)  /* small */
background: linear-gradient(135deg, <album.color>aa, <album.color>33)  /* large */
```
Plus an inner radial highlight on the large variant (see `.album-cover-lg::after`).

When real cover art lands, replace these with `<img>` (or `background-image`) on the same elements. Each album in the data has a `color` field for the placeholder — keep it as a fallback if image fails.

---

## Responsive

- `≤ 1080px`: TOC moves above content (no longer sticky). TOC list becomes a 2-column grid; active state uses top border instead of left border.
- `≤ 700px`: page padding `28px 24px 80px`; album cover shrinks to 88×88; H1 to 30px; lyric line en to 18px / zh to 14.5px; TOC list collapses to single column.

---

## Data Model

```ts
type Album = {
  slug: string;          // url-safe, kebab-case
  title: string;
  artist: string;
  year: number;
  color: string;         // hex, for placeholder cover gradient
  songs: Song[];
};

type Song = {
  slug: string;          // url-safe, kebab-case
  title: string;
  titleZh: string;       // Traditional Chinese title
  lyrics: string;        // raw string, see format below
};
```

### Lyrics raw-string format

Alternating English / Chinese lines. Stanzas separated by blank lines. The parser splits on `\n\s*\n` for stanzas, then pairs every two lines as `[en, zh]`. Empty lines between stanzas are required. Trailing punctuation is part of the line.

The parser is ~15 lines (see `parseLyrics` in `songbook-app.js`). Reimplement straightforwardly, or migrate the data to a structured `Stanza[] = Line[][]` shape at build time.

### Currently included
- One album: Songs of Leonard Cohen (1967), 10 tracks, complete bilingual.

---

## Implementation Notes

1. **Backdrop-filter performance**: The sidebar uses `backdrop-filter: blur(20px) saturate(120%)` over a WebGL canvas. This is fine on modern hardware but watch for jank on low-end devices — consider reducing blur radius or removing on the album page (since the reading area is opaque-feeling already).
2. **The TOC scrollspy must observe inside the scroll container**, not the window. The reference uses `#main` as the scroll root — replicate this in the framework's equivalent.
3. **Don't re-render on song-anchor change** — only re-render when album changes. Otherwise the scrollspy-driven URL updates cause flicker.
4. **Custom scrollbars**: webkit-scrollbar styling is included; preserve or replace with the codebase's scrollbar convention.
5. **`text-wrap: pretty`**: Used on lyric lines to avoid orphans. Browser-dependent (Chromium / recent Firefox); falls back gracefully.

---

## Files in this handoff

- `reference/Songbook.html` — Main HTML with full CSS (the source of truth for layout and tokens)
- `reference/songbook-bg.js` — Background shader (WebGL2)
- `reference/songbook-data.js` — Album data (Cohen's debut)
- `reference/songbook-app.js` — Routing, rendering, scrollspy, sidebar logic
