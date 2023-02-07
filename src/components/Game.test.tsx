import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Game from './Game'

test('test Game component', async () => {
  render(<Game />)

  // 1行目 | X |  |  |
  const button0 = screen.getAllByRole('button')[0]
  await userEvent.click(button0)
  expect(button0).toHaveTextContent('X')

  // 2行目 | O |  |  |
  const button3 = screen.getAllByRole('button')[3]
  await userEvent.click(button3)
  expect(button3).toHaveTextContent('O')

  // 1行目 | X | X |  |
  const button1 = screen.getAllByRole('button')[1]
  await userEvent.click(button1)
  expect(button1).toHaveTextContent('X')

  // 2行目 | O | 0 |  |
  const button4 = screen.getAllByRole('button')[4]
  await userEvent.click(button4)
  expect(button4).toHaveTextContent('O')

  // 3行目 | X |   |   |
  const button6 = screen.getAllByRole('button')[6];
  await userEvent.click(button6);
  expect(button6).toHaveTextContent('X');

  // 3行目 | X | O |   |
  const button7 = screen.getAllByRole('button')[7];
  await userEvent.click(button7);
  expect(button7).toHaveTextContent('O');

  // 1行目 | X | X | X | --> Winner: 'X'
  const button2 = screen.getAllByRole('button')[2];
  await userEvent.click(button2);
  expect(button2).toHaveTextContent('X');

  // testid で取得した要素に 'Winner: X' が表示されているか?
  expect(screen.getByTestId('status')).toHaveTextContent('Winner: X')

  // 2行目 | O | O |  | <-- 勝敗が決まったためクリック不可
  const button5 = screen.getAllByRole('button')[5]
  await userEvent.click(button5)
  // 反応なしを確認
  expect(button5).toHaveTextContent('')

  // history を 'step-#0' まで戻す
  await userEvent.click(screen.getByTestId('step-#0'))

  // 3行目 |  |  | X |
  const button8 = screen.getAllByRole('button')[8]

  // 'X' が一手目として 'step-#1' を上書きしたので...
  await userEvent.click(button8)
  expect(button8).toHaveTextContent('X')

  // history 一覧に '#2' 以降は存在しないはず　
  expect(screen.queryByText(/move #2/)).toBeNull()
})