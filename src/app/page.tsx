import { Stack } from '@mui/material';
import styles from './page.module.css';
import Article, { ArticleProps } from '@/../component/Article';

const articleProps: ArticleProps = {
  title: 'title',
  link: 'https://example.com',
  summary: 'example',
  published: '999/999/999',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack>
        <Article {...articleProps} />
      </Stack>
    </main>
  );
}
