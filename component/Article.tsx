import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

export interface ArticleProps {
  title: string;
  link: string;
  summary: string;
  published: string;
}

const linkButtonWord: string = '元記事へ';

export default function Article(props: ArticleProps): React.ReactNode {
  // const url: UrlObject = new URL('/', props.link);
  // console.log(url);
  return (
    <Card sx={{ width: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {props.published}
        </Typography>
        <Typography variant="body1">{props.summary}</Typography>
      </CardContent>
      <CardActions>
        <Link href={props.link} target="_blank" rel="noreferrer">
          <Button>{linkButtonWord}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
