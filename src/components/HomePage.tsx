import type { Album } from '../types';

interface Props {
  albums: Album[];
}

export default function HomePage({ albums }: Props) {
  return (
    <div className="home-page">
      <div className="home-mark">⌁</div>
      <div className="home-albums">
        {albums.map(album => (
          <a key={album.slug} href={`#${album.slug}`} className="home-album-card">
            {album.coverImage
              ? <img src={album.coverImage} alt={album.title} className="home-album-card-cover" />
              : <div className="home-album-card-cover mono" style={{ background: `linear-gradient(135deg, ${album.color}aa, ${album.color}33)` }}>
                  {album.artist.split(' ').map(w => w[0]).join('')}
                </div>
            }
            <div className="home-album-card-info">
              <div className="home-album-card-title">{album.title}</div>
              <div className="home-album-card-sub mono">
                {album.artist} · {album.year}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
