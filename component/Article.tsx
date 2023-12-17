import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { RssData } from '../api/RssApi';

export interface ArticleProps {
  articleData: RssData;
  key: number;
}

const linkButtonWord: string = '元記事へ';

export default function Article({ articleData, key }: ArticleProps): React.ReactNode {
  // const url: UrlObject = new URL('/', props.link);
  // console.log(url);
  return (
    <Card sx={{ width: 'auto' }} key={key}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {articleData.title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {articleData.published}
        </Typography>
        <Typography variant="body1">{articleData.summary}</Typography>
      </CardContent>
      <CardActions>
        <Link href={articleData.link} target="_blank" rel="noreferrer">
          <Button>{linkButtonWord}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
