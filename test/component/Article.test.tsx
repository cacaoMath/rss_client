import Article, { ArticleProps } from '@/../component/Article';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RssData } from '../../api/RssApi';

const testData: ArticleProps = {
  articleData: {
    title: 'title',
    link: 'https://cacaomath.com',
    summary: 'this page show cacaomath work',
    published: '1999/9/9',
  } as RssData,
};

describe('Article componentのテスト', () => {
  it('tieleの文言が表示されている', () => {
    render(<Article {...testData} />);
    expect(screen.getByText(testData.articleData.title)).toBeInTheDocument();
  });
  it('summaryの文言が表示されている', () => {
    render(<Article {...testData} />);
    expect(screen.getByText(testData.articleData.summary)).toBeInTheDocument();
  });
  it('publishedの文言が表示されている', () => {
    render(<Article {...testData} />);
    expect(screen.getByText(testData.articleData.published)).toBeInTheDocument();
  });
  it('linkのボタンが存在する', () => {
    render(<Article {...testData} />);
    const linkButton = screen.getByRole('link');
    expect(linkButton.textContent).toEqual('元記事へ');
    expect(linkButton).toHaveAttribute('href', testData.articleData.link);
  });
});
