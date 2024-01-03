import axios, { AxiosResponse } from 'axios';

export interface FeedData {
  url: string;
  description: string;
  id: number;
  is_active: boolean;
}

export interface CategoryData {
  text: string;
  id: number;
}

export interface RssData {
  title: string;
  link: string;
  summary: string;
  published: string;
}

export interface Response<T> {
  status: number;
  data: (T | string | unknown)[];
}

export class RssApi {
  constructor(url: string = 'http://localhost:3000') {
    axios.defaults.baseURL = url;
  }

  async getFeeds(): Promise<Response<FeedData>> {
    try {
      const response: AxiosResponse = await axios.get('/feeds');
      return { status: response.status, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errRes = error.response;
          if (errRes.status == 500) {
            console.log('server error');
            return { status: error.response.status, data: ['server error'] };
          }
        } else if (error.request) {
          console.log('request error');
          return { status: -1, data: ['request error'] };
        }
      }
      return { status: -2, data: [error] };
    }
  }

  async getCategories(): Promise<Response<CategoryData>> {
    try {
      const response: AxiosResponse = await axios.get('/categories');
      return { status: response.status, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errRes = error.response;
          if (errRes.status == 500) {
            console.log('server error');
            return { status: error.response.status, data: ['server error'] };
          }
        } else if (error.request) {
          console.log('request error');
          return { status: -1, data: ['request error'] };
        }
      }
      return { status: -2, data: [error] };
    }
  }

  async postRss(categories: string[]): Promise<Response<RssData>> {
    try {
      const response = await axios.post('/rss', { categories: categories });
      return { status: response.status, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.status) {
          const status = error.status;
          switch (status) {
            case 404:
              return { status: 404, data: ['Those coategories are not present.'] };
            case 422:
              return { status: 422, data: ['validation error'] };
            case 500:
              return { status: 500, data: ['server error'] };
          }
        } else if (error.request) {
          console.log('request error');
          return { status: -1, data: ['request error'] };
        }
      }
      return { status: -2, data: [error] };
    }
  }
}
