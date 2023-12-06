import Article, { ArticleProps } from '@/../component/Article';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const testData: ArticleProps = {
  title: 'title',
  link: 'https://cacaomath.com',
  summary: 'this page show cacaomath work',
  published: '1999/9/9',
};

describe('Article componentのテスト', () => {
  it('tieleの文言が表示されている', () => {
    render(<Article {...testData} />);
    expect(screen.getByText(testData.title)).toBeInTheDocument();
  });
  it('summaryの文言が表示されている', () => {
    render(<Article {...testData} />);
    expect(screen.getByText(testData.summary)).toBeInTheDocument();
  });
  it('publishedの文言が表示されている', () => {
    render(<Article {...testData} />);
    expect(screen.getByText(testData.published)).toBeInTheDocument();
  });
  it('linkのボタンが存在する', () => {
    render(<Article {...testData} />);
    const linkButton = screen.getByRole('link');
    expect(linkButton.textContent).toEqual('元記事へ');
    expect(linkButton).toHaveAttribute('href', testData.link);
  });
});
