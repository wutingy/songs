import { useEffect } from 'react';
import ShaderBackground from './components/ShaderBackground';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import AlbumPage from './components/AlbumPage';
import { ALBUMS } from './data/albums';
import { useHash } from './hooks/useHash';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const hash = useHash();
  // Default to collapsed on mobile so sidebar doesn't overlay content on first visit
  const mobileDefault = window.innerWidth < 700 ? '1' : '0';
  const [sidebarCollapsed, setSidebarCollapsed] = useLocalStorage('songbook.sidebar.collapsed', mobileDefault);

  const collapsed = sidebarCollapsed === '1';

  // Apply body classes
  useEffect(() => {
    document.body.classList.toggle('sidebar-collapsed', collapsed);
  }, [collapsed]);

  // Parse hash: albumSlug or albumSlug/songSlug
  const parts = hash.split('/');
  const albumSlug = parts[0] ?? '';
  const songSlug = parts[1] ?? null;

  const album = ALBUMS.find(a => a.slug === albumSlug) ?? null;

  return (
    <>
      <ShaderBackground />

      <div className="app">
        <Sidebar
          albums={ALBUMS}
          activeSlug={album?.slug ?? null}
          collapsed={collapsed}
          onToggleCollapsed={() => setSidebarCollapsed(collapsed ? '0' : '1')}
          onClose={() => {
            // On mobile, closing sidebar = collapsing it
            if (window.innerWidth <= 700) setSidebarCollapsed('1');
          }}
        />

        <main id="main">
          {album ? (
            <AlbumPage key={album.slug} album={album} initialSongSlug={songSlug} />
          ) : (
            <HomePage albums={ALBUMS} />
          )}
        </main>
      </div>
    </>
  );
}
