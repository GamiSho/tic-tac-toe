import Board, { calculateWinner } from './Board'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Borad コンポーネントのテスト', async () => {
  const spy = vi.fn()
  render(<Board squares={[]} xIsNext={true} onPlay={spy} />)

  /**
   * 左上のマスをクリック
   * | X |   |   |
   * |   |   |   |
   * |   |   |   |
   */
  await userEvent.click(screen.getAllByRole('button')[0])

  // スパイが呼ばれたか?
  expect(spy).toHaveBeenCalled()

  // スパイモックをクリアする
  spy.mockRestore()
})

test('calculateWinner() 関数のテスト', () => {
  /**
   * 左側の列を 'X' が占領
   * | X | O |  |
   * | X | O |  |
   * | X | O |  |
   */
  const winnerX = calculateWinner([
    'X', 'O', null,
    'X', 'O', null,
    'X', null, null,
  ])

  // 戻り値が 'X'
  expect(winnerX).toBe('X')

  // 勝者なし
  const winnerNull = calculateWinner([])
  // 戻り値が null
  expect(winnerNull).toBe(null)
})
