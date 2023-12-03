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
    <Card>
      <CardContent>
        <Typography>{props.title}</Typography>
        <Typography>{props.published}</Typography>
        <Typography>{props.summary}</Typography>
      </CardContent>
      <CardActions>
        <Link href={props.link}>
          <Button>{linkButtonWord}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
