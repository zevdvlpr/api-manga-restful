import { ANIME_TV_API_ROUTE } from '@config/urls';

import { ICalendary } from '../interfaces/functions/calendary';

import { api } from '../api';

function parseResults(html: string) {
  html = html.replace(/(\r\n|\n|\r)/gm, '');

  const data = Array.from(
    html.match(/(?<=<div class="card">).*?(?=<\/div>)/gm),
  ).map(html => {
    return {
      day: html
        .match(
          /(?<=<ion-item class="item item-divider">).*?(?=<\/ion-item>)/gm,
        )[0]
        .trim(),
      animes: Array.from(
        html.match(
          /(?<=<ion-item class="item item-text-wrap">).*?(?=<\/ion-item>)/gm,
        ),
      ).map(anime => {
        anime = anime.replace(/\<i.*<\/i>/gm, '');

        return {
          name: anime
            .replace(/-:- -/gm, '')
            .replace(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] -/gm, '')
            .trim(),
          schedule: anime.match(/-:- -/gm)
            ? 'none'
            : anime
                .trim()
                .match(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/gm)[0],
        };
      }),
    };
  });

  return data;
}

export async function calendary(): Promise<ICalendary[]> {
  const params = { calendario: '' };

  const { data } = await api.get(ANIME_TV_API_ROUTE, { params });

  return parseResults(data.msg);
}
