import '@testing-library/jest-dom'
import { calculateWinner } from './Board'

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
