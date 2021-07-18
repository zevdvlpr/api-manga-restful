import { ANIME_TV_CDN_URL } from '@config/urls';

import { TListType } from '../interfaces/listType';

export class ListModel {
  public id: string;
  public category_id: string;
  public category_name: string;
  public category_image: string;
  public title: string;
  public video_id: string;

  constructor(type: TListType, data: any) {
    if (
      type === 'all' ||
      type === 'popular' ||
      type === 'categories' ||
      type === 'letters'
    ) {
      this.id = data.id;
      this.category_name = data.category_name;
      this.category_image = data.category_image
        ? `${ANIME_TV_CDN_URL}/img/${data.category_image}`
        : null;
    } else if (type === 'latest') {
      this.video_id = data.video_id;
      this.category_id = data.category_id;
      this.title = data.title;
      this.category_image = data.category_image
        ? `${ANIME_TV_CDN_URL}/img/${data.category_image}`
        : null;
    }
  }
}
