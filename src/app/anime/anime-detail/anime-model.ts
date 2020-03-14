export class AnimeRelated {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export class Anime {
  mal_id: number;
  url: string;
  image_url: string;
  trailer_url: string;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: string;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  favorites: number;
  synopsis: string;
  background: string;
  premiered: string;
  broadcast: string;
  related: AnimeRelated[];
  producers: AnimeRelated[];
  licensors: AnimeRelated[];
  studios: AnimeRelated[];
  genres: AnimeRelated[];
  opening_themes: string[];
  ending_themes: string[];
}
