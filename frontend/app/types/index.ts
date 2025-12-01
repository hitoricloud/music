export interface IconProps {
  width?: string;
  height?: string;
  className?: string;
}

export interface GeniusSearchResponse {
  result: {
    meta: {
      status: number;
    };
    response: {
      hits: GeniusHit[];
    };
  };
}

export interface GeniusHit {
  highlights: any[];
  index: string; // обычно "song"
  type: string; // тоже "song"
  result: GeniusSong;
}

export interface GeniusSong {
  _type: "song";
  annotation_count: number;
  api_path: string;
  artist_names: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  instrumental: boolean;
  lyrics_owner_id: number;
  lyrics_state: string;
  lyrics_updated_at: number;
  path: string;
  primary_artist_names: string;
  pyongs_count: number;
  relationships_index_url: string;

  release_date_components: {
    year: number;
    month: number;
    day: number;
  };

  release_date_for_display: string;
  release_date_with_abbreviated_month_for_display: string;

  song_art_image_thumbnail_url: string;
  song_art_image_url: string;

  stats: {
    unreviewed_annotations: number;
    hot: boolean;
    pageviews: number;
    concurrents?: number; // бывает не всегда
  };

  title: string;
  title_with_featured: string;
  updated_by_human_at: number;
  url: string;

  featured_artists: GeniusArtist[];
  primary_artist: GeniusArtist;
  primary_artists: GeniusArtist[];
}

export interface GeniusArtist {
  _type: "artist";
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  index_character: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  slug: string;
  url: string;
  iq?: number;
}

export interface GeniusAlbumResponse {
  result: {
    meta: {
      status: number;
    };
    response: {
      sections: Section[];
    };
  };
}

export interface Section {
  type: string;
  hits: Hit[];
}

export interface Hit {
  highlights: any[];
  index: string;
  type: string;
  result: AlbumResult;
}

export interface AlbumResult {
  _type: string;
  api_path: string;
  cover_art_thumbnail_url: string;
  cover_art_url: string;
  full_title: string;
  id: number;
  name: string;
  name_with_artist: string;
  primary_artist_names: string;
  release_date_components: ReleaseDateComponents;
  release_date_for_display: string;
  url: string;
  artist: GeniusArtist;
  primary_artists: GeniusArtist[];
}

export interface ReleaseDateComponents {
  year: number;
  month: number;
  day: number;
}

export interface GeniusSongSectionResponse {
  result: {
    meta: {
      status: number;
    };
    response: {
      sections: GeniusSongSection[];
    };
  };
}

export interface GeniusSongSection {
  type: "song";
  hits: GeniusSongHit[];
}

export interface GeniusSongHit {
  highlights: any[];
  index: string; // "song"
  type: string; // "song"
  result: GeniusSong;
}

export interface GeniusArtistSectionResponse {
  result: {
    meta: {
      status: number;
    };
    response: {
      sections: GeniusArtistSection[];
    };
  };
}

export interface GeniusArtistSection {
  type: "artist";
  hits: GeniusArtistHit[];
}

export interface GeniusArtistHit {
  highlights: any[];
  index: string; // "artist"
  type: string; // "artist"
  result: GeniusArtist;
}
