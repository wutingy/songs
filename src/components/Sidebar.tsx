import type { Album } from '../types';

interface Props {
  albums: Album[];
  activeSlug: string | null;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  onClose: () => void;
}

export default function Sidebar({
  albums,
  activeSlug,
  collapsed,
  onToggleCollapsed,
  onClose,
}: Props) {
  return (
    <>
      {/* Mobile-only: fixed toggle outside sidebar (unaffected by visibility:hidden) */}
      <button className="sidebar-toggle-mobile" onClick={onToggleCollapsed} title="Toggle sidebar">
        ☰
      </button>

      {/* Mobile backdrop */}
      {!collapsed && (
        <div className="sidebar-backdrop" onClick={onClose} />
      )}

      <aside id="sidebar">
        <div className="sidebar-header">
          {/* Desktop-only: toggle inside sidebar header */}
          <button className="sidebar-toggle-desktop" onClick={onToggleCollapsed} title="Toggle sidebar">
            ☰
          </button>
          <div className="brand">SONGBOOK</div>
        </div>

        <section className="group">
          <ul className="album-list">
            {albums.map(album => (
              <li
                key={album.slug}
                className={`album-item${activeSlug === album.slug ? ' active' : ''}`}
              >
                <a
                  href={`#${album.slug}`}
                  className="album-link"
                  onClick={onClose}
                >
                  {album.coverImage
                    ? <img src={album.coverImage} alt={album.title} className="album-cover" />
                    : <span className="album-cover" style={{ background: `linear-gradient(135deg, ${album.color}aa, ${album.color}55)` }} />
                  }
                  <span className="album-meta">
                    <span className="album-title">{album.title}</span>
                    <span className="album-sub">
                      {album.artist} · {album.year}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </>
  );
}
