import axios, { AxiosResponse } from 'axios';

export class RssApi {
  constructor(url: string) {
    axios.defaults.baseURL = url;
  }

  async getFeeds() {
    try {
      const response: AxiosResponse = await axios.get('feeds');
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
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
