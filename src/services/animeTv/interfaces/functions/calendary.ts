interface IAnime {
  name: string;
  schedule: string;
}

export interface ICalendary {
  day: string;
  animes: IAnime[];
}
