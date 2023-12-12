import { RssApi } from '@/../api/RssApi';
import axios from 'axios';

const rssApi = new RssApi('https://rss-api.cacaomath.com');

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

//get /Feedsで想定しうるエラーは200か500のみ
describe('RssApi getFeeds test', () => {
  afterEach(() => jest.restoreAllMocks());
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
});