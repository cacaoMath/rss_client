import { Link } from '@mui/material';

interface props {
  href: string;
  text: string;
}
export default function MyLink({ href, text }: props) {
  return (
    <Link href={href} underline="none" color="black">
      {text}
    </Link>
  );
}
