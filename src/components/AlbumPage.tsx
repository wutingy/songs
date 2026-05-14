import { useEffect, useRef, useCallback, useState } from 'react';
import type { Album } from '../types';
import { parseLyrics } from '../utils/parseLyrics';

interface Props {
  album: Album;
  initialSongSlug: string | null;
}

export default function AlbumPage({ album, initialSongSlug }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [tocExpanded, setTocExpanded] = useState(false);
  const tocRef = useRef<HTMLElement>(null);

  // Collapse TOC when clicking outside of it
  useEffect(() => {
    if (!tocExpanded) return;
    const handler = (e: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(e.target as Node)) {
        setTocExpanded(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [tocExpanded]);

  // Get the scroll container (the #main element)
  useEffect(() => {
    mainRef.current = document.getElementById('main') as HTMLElement;
  }, []);

  const scrollToSong = useCallback((slug: string, behavior: ScrollBehavior = 'instant') => {
    const el = document.getElementById(slug);
    const container = document.getElementById('main');
    if (el && container) {
      const top = el.getBoundingClientRect().top + container.scrollTop - 24;
      container.scrollTo({ top, behavior });
    }
  }, []);

  // Scrollspy
  useEffect(() => {
    const container = document.getElementById('main');
    if (!container) return;

    const songs = Array.from(document.querySelectorAll<HTMLElement>('.song'));
    const tocItems = Array.from(document.querySelectorAll<HTMLElement>('.toc-item'));

    function setActive(slug: string) {
      tocItems.forEach(li => {
        li.classList.toggle('active', li.dataset.songSlug === slug);
      });
    }

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .map(e => ({
            slug: (e.target as HTMLElement).dataset.songSlug ?? '',
            top: e.boundingClientRect.top,
          }));
        if (visible.length) {
          visible.sort((a, b) => Math.abs(a.top - 80) - Math.abs(b.top - 80));
          const slug = visible[0]?.slug ?? '';
          setActive(slug);
          history.replaceState(null, '', `#${album.slug}/${slug}`);
        }
      },
      {
        root: container,
        rootMargin: '-80px 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    songs.forEach(s => observerRef.current!.observe(s));
    if (songs[0]?.dataset.songSlug) setActive(songs[0].dataset.songSlug);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [album]);

  // Scroll to initial song after layout
  useEffect(() => {
    if (initialSongSlug) {
      requestAnimationFrame(() => scrollToSong(initialSongSlug, 'auto'));
    } else {
      document.getElementById('main')?.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [album, initialSongSlug, scrollToSong]);

  // Update title
  useEffect(() => {
    document.title = `${album.title} — ${album.artist} · Songbook`;
    return () => { document.title = 'Songbook'; };
  }, [album]);

  const initials = album.artist.split(' ').map(w => w[0]).join('');

  return (
    <article className="album-page">
      <header className="album-header">
        <div
          className="album-cover-lg"
          style={album.coverImage ? {} : {
            background: `linear-gradient(135deg, ${album.color}aa, ${album.color}33)`,
          }}
        >
          {album.coverImage
            ? <img src={album.coverImage} alt={album.title} className="album-cover-img" />
            : <span className="album-cover-text mono">{initials}</span>
          }
        </div>
        <div className="album-info">
          <div className="album-tag mono">ALBUM</div>
          <h1 className="album-h1">{album.title}</h1>
          <div className="album-byline">
            {album.artist}
            <span className="dot"> · </span>
            {album.year}
            <span className="dot"> · </span>
            {album.songs.length} tracks
          </div>
        </div>
      </header>

      <div className="album-body">
        <aside ref={tocRef} className={`toc${tocExpanded ? ' toc-expanded' : ''}`}>
          <div className="toc-bar">
            <button className="toc-toggle" onClick={() => setTocExpanded(v => !v)}>
              <span className="toc-label mono">TRACKS</span>
              <span className="toc-chev mono">{tocExpanded ? '▴' : '▾'}</span>
            </button>
            <button
              className="toc-top-btn mono"
              onClick={() => document.getElementById('main')?.scrollTo({ top: 0, behavior: 'instant' })}
            >
              ↑ Album
            </button>
          </div>
          <ol className="toc-list">
            {album.songs.map((song, i) => (
              <li key={song.slug} className="toc-item" data-song-slug={song.slug}>
                <a
                  href={`#${album.slug}/${song.slug}`}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSong(song.slug);
                    history.replaceState(null, '', `#${album.slug}/${song.slug}`);
                    setTocExpanded(false);
                  }}
                >
                  <span className="toc-num mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="toc-text">
                    <span className="toc-title">{song.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="songs">
          {album.songs.map((song, i) => {
            const stanzas = parseLyrics(song.lyrics);
            return (
              <section
                key={song.slug}
                className="song"
                id={song.slug}
                data-song-slug={song.slug}
              >
                <header className="song-header">
                  <div className="song-num mono">{String(i + 1).padStart(2, '0')}</div>
                  <h2 className="song-title">{song.title}</h2>
                  <div className="song-title-zh">{song.titleZh}</div>
                </header>
                <div className="lyrics">
                  {stanzas.map((stanza, si) => (
                    <div key={si} className="stanza">
                      {stanza.map(([en, zh], li) => (
                        <div key={li} className="line">
                          <div className="en">{en}</div>
                          {zh && <div className="zh">{zh}</div>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
