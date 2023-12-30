import { RssApi } from '@/../api/RssApi';
const url = process.env.NEXT_PUBLIC_RSSAPI_URL;
export const rssApi = new RssApi(url);
