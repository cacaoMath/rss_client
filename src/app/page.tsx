'use client';
import { Stack } from '@mui/material';
import { CategoryData, RssApi, RssData } from '@/../api/RssApi';
import { useQuery } from '@tanstack/react-query';
import Article from '@/../component/Article';

const rssApi = new RssApi('http://localhost:8000');

export default function Home() {
  const { data: categoryRes } = useQuery({
    queryKey: ['categories'],
    queryFn: rssApi.getCategories,
  });
  const categories = categoryRes?.data.map((value) => {
    return (value as CategoryData).text;
  });

  const {
    data: rssData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['rssData', categories],
    queryFn: () => {
      return rssApi.postRss(categories as string[]);
    },
    enabled: !!categories,
  });

  if (isLoading) return <p>loading</p>;
  if (isError) return <p>error</p>;
  if (rssData?.status != 200) return <p>予期せぬエラーが発生しました</p>;
  return (
    <Stack>
      {rssData?.data.map((value, key) => {
        const rssValue = value as RssData;
        return <Article articleData={rssValue} key={key}></Article>;
      })}
    </Stack>
  );
}
