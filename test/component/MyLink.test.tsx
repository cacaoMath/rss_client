import MyLink from '@/../component/MyLink';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const linkProps = {
  href: 'http://localhost:3000',
  text: 'localhost test',
};

describe('MyLinkのテスト', () => {
  it('textの文言が表示されている', () => {
    render(<MyLink {...linkProps} />);
    expect(screen.getByText('localhost test')).toBeInTheDocument();
  });
});
