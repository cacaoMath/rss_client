import { RssApi } from '@/../api/RssApi';
import axios from 'axios';

const rssApi = new RssApi('https://rss-api.cacaomath.com');

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

//get /Feedsで想定しうるエラーは200か500のみ
describe('RssApi getFeeds test', () => {
  it('リクエストが200 OK', async () => {
    const mockResponse = {
      status: 200,
      data: [
        {
          url: 'https://aaa.com',
          description: 'string',
          id: 1,
          is_active: true,
        },
        {
          url: 'https://bbb.co.jp',
          description: 'string',
          id: 2,
          is_active: true,
        },
      ],
    };
    axiosMock.get.mockResolvedValue(mockResponse);
    const rssApiResponse = await rssApi.getFeeds();
    expect(rssApiResponse.data).toEqual(mockResponse.data);
    expect(rssApiResponse.status).toEqual(200);
  });

  it('500 error', async () => {
    (axiosMock.isAxiosError as unknown) = jest.fn().mockReturnValue(true);
    axiosMock.get.mockRejectedValue({ response: { status: 500, data: undefined } });
    const rssApiResponse = await rssApi.getFeeds();
    expect(rssApiResponse.data).toEqual(['server error']);
    expect(rssApiResponse.status).toEqual(500);
  });
});

//get /categoriesで想定しうるエラーは200か500のみ
describe('RssApi getCategories test', () => {
  it('リクエストが200 OK', async () => {
    const mockResponse = {
      status: 200,
      data: [
        {
          text: 'aaa',
          id: 1,
        },
        {
          text: 'bbb',
          id: 2,
        },
      ],
    };
    axiosMock.get.mockResolvedValue(mockResponse);
    const rssApiResponse = await rssApi.getFeeds();
    expect(rssApiResponse.data).toEqual(mockResponse.data);
    expect(rssApiResponse.status).toEqual(200);
  });

  it('500 error', async () => {
    (axiosMock.isAxiosError as unknown) = jest.fn().mockReturnValue(true);
    axiosMock.get.mockRejectedValue({ response: { status: 500, data: undefined } });
    const rssApiResponse = await rssApi.getFeeds();
    expect(rssApiResponse.data).toEqual(['server error']);
    expect(rssApiResponse.status).toEqual(500);
  });
});

describe('RssApi postRss test', () => {
  it('200 ok', async () => {
    const mockResponse = {
      status: 200,
      data: [
        {
          title: 'abcd',
          link: 'https://abcd.co.jp',
          summary: 'string',
          published: 'string',
        },
        {
          title: 'efgh',
          link: 'https://efgh.com',
          summary: 'string',
          published: 'string',
        },
      ],
    };
    axiosMock.post.mockResolvedValue(mockResponse);
    const rssApiResponse = await rssApi.postRss(['test']);
    console.log(rssApiResponse.data);
    expect(rssApiResponse.data).toEqual(mockResponse.data);
    expect(rssApiResponse.status).toEqual(200);
  });

  describe('error tests', () => {
    (axiosMock.isAxiosError as unknown) = jest.fn().mockReturnValue(true);
    it('404 error', async () => {
      const mockResponse = {
        status: 404,
        data: ['Those coategories are not present.'],
      };
      axiosMock.post.mockRejectedValue(mockResponse);
      const rssApiResponse = await rssApi.postRss(['test']);
      expect(rssApiResponse.data).toEqual(['Those coategories are not present.']);
      expect(rssApiResponse.status).toEqual(404);
    });
    it('422 error', async () => {
      const mockResponse = {
        status: 422,
        data: ['Those coategories are not present.'],
      };
      axiosMock.post.mockRejectedValue(mockResponse);
      const rssApiResponse = await rssApi.postRss(['test']);
      expect(rssApiResponse.data).toEqual(['validation error']);
      expect(rssApiResponse.status).toEqual(422);
    });
    it('500 error', async () => {
      const mockResponse = {
        status: 500,
        data: ['Those coategories are not present.'],
      };
      axiosMock.post.mockRejectedValue(mockResponse);
      const rssApiResponse = await rssApi.postRss(['test']);
      expect(rssApiResponse.data).toEqual(['server error']);
      expect(rssApiResponse.status).toEqual(500);
    });
  });
});
