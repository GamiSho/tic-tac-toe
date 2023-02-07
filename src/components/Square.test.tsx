import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Square from './Square'

test('Square コンポーネントのテスト', () => {
  render(<Square value={'X'} onSquareClick={() => vi.fn()} />)

  // マス目に 'X' が入っているか?
  expect(screen.getByRole('button')).toHaveTextContent('X')
})