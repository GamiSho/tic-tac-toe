import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import App from './App'

test('App コンポーネントのテスト', async () => {
  render(<App />)
})
