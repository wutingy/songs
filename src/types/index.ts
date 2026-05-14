export interface Song {
  slug: string;
  title: string;
  titleZh: string;
  lyrics: string;
}

export interface Album {
  slug: string;
  title: string;
  artist: string;
  year: number;
  color: string;
  coverImage?: string;
  songs: Song[];
}
