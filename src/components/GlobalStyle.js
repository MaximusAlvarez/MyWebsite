import React from 'react'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from '../styles/prism'
export default function GlobalStyle ({ children }) {
  return (
    <>
      <Global
        styles={css`
              ${prismDarkTheme};
              ::selection {
                background-color: #90cdf4;
                color: #fefefe;
              }
              ::-moz-selection {
                background: #ffb7b7;
                color: #fefefe;
              }
              html {
                min-width: 356px;
              }
              #__next {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                background: #000;
              }
              ::-webkit-scrollbar {
                width: 8px;
                background: #ffffff00;
              }

              ::-webkit-scrollbar-thumb {
                background: #3CCF91;
                border-radius: 8px;
              }
            `}
      />
      {children}
    </>
  )
}
