import Menubar from '@/../component/MenuBar';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const user = userEvent.setup();

describe('MenuBar componentのテスト', () => {
  it('tieleの文言が表示されている', () => {
    render(<Menubar />);
    expect(screen.getByText('rss')).toBeInTheDocument();
  });
  describe('バンバーガーメニュー', () => {
    it('メニューアイコンが存在する', () => {
      render(<Menubar />);
      const hambergar = screen.getAllByTestId('MenuIcon');
      // 1つだけなので、1つ目の要素を見る
      expect(hambergar[0]).toBeInTheDocument();
    });
    it('メニューボタンが開いて文言が表示される', () => {
      render(<Menubar />);
      const hambetgarButton = screen.getByRole('button');
      expect(screen.queryByText('Home')).toBeNull();
      expect(screen.queryByText('Feeds')).toBeNull();
      fireEvent.click(hambetgarButton);
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Feeds')).toBeInTheDocument();
    });
    it('メニューボタンが開いてTabで閉じる', async () => {
      render(<Menubar />);
      const hambetgarButton = screen.getByRole('button');
      fireEvent.click(hambetgarButton);
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Feeds')).toBeInTheDocument();
      await user.tab();
      expect(screen.queryByText('Home')).toBeNull();
      expect(screen.queryByText('Feeds')).toBeNull();
    });
    it('メニューボタンが開いてEscapeで閉じる', async () => {
      render(<Menubar />);
      const hambetgarButton = screen.getByRole('button');
      fireEvent.click(hambetgarButton);
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Feeds')).toBeInTheDocument();
      await user.keyboard('[Escape]');
      expect(screen.queryByText('Home')).toBeNull();
      expect(screen.queryByText('Feeds')).toBeNull();
    });
  });
});
