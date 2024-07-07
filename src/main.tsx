import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import InterRegular from '@/shared/ui/fonts/Inter-Regular.ttf'
import InterBold from '@/shared/ui/fonts/Inter-Bold.ttf'
import { mainTheme } from './shared/config/theme.ts'

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: normal;
    src: url(${InterRegular});
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    src: url(${InterBold})
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    line-height: 24px;

    &:focus {
      outline: none;
      outline-offset: 0;
    }
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
