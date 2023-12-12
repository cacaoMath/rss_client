import axios, { AxiosResponse } from 'axios';

interface FeedData {
  url: string;
  description: string;
  id: number;
  is_active: boolean;
}

interface FeedsResponse {
  status: number;
  data: (FeedData | string | unknown)[];
}

interface CategoryData {
  text: 'string';
  id: 0;
}

interface CategoriesResponse {
  status: number;
  data: (CategoryData | string | unknown)[];
}

export class RssApi {
  constructor(url: string) {
    axios.defaults.baseURL = url;
  }

  async getFeeds(): Promise<FeedsResponse> {
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

  async getCategories(): Promise<CategoriesResponse> {
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

  async postRss(categories: [string]) {
    try {
      const response = await axios.post('/rss', { categories: categories });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
    }
  }
}
