import { ANIME_TV_CDN_URL } from '../config/urls';

export class AllAnimeTemplate {
  public id: any;

  public category: {
    id?: string;
    name?: string;
    image: string;
  };

  public title: string;

  public video: {
    id: string;
  };

  constructor(type: 'all' | 'popular' | 'recents', data: any) {
    if (type === 'all' || type === 'popular') {
      this.id = data.id;
      this.category = {
        name: data.category_name,
        image: data.category_image
          ? `${ANIME_TV_CDN_URL}/img/${data.category_image}`
          : null,
      };
    } else {
      this.title = data.title;
      this.video = {
        id: data.video_id,
      };
      this.category = {
        id: data.id,
        image: data.category_image
          ? `${ANIME_TV_CDN_URL}/img/${data.category_image}`
          : null,
      };
    }
  }
}
