import axios, { AxiosResponse } from 'axios';

export interface RssApiMethodResponse {
  result: RssApiRequestResult;
  response: AxiosResponse | unknown;
}

export type RssApiRequestResult = 'OK' | 'AXIOS_ERROR' | 'UNEXPECTED_ERROR';
export class RssApi {
  constructor(url: string) {
    axios.defaults.baseURL = url;
  }

  async getFeeds(): Promise<RssApiMethodResponse> {
    try {
      const response: AxiosResponse = await axios.get('feeds');
      return { result: 'OK', response: response };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log('server error');
          return { result: 'AXIOS_ERROR', response: error.response };
        } else if (error.request) {
          console.log('request error');
          return { result: 'AXIOS_ERROR', response: error.request };
        }
      }
      return { result: 'UNEXPECTED_ERROR', response: error };
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
