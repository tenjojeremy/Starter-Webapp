export default {
  MuiCssBaseline: {
    styleOverrides: `
          @font-face {
            font-family: 'SourceSandProRegular';
            font-style: normal;
            font-display: swap;
            src: url('/fonts/source-sans-pro/regular.woff2') format('woff2');
          }

        * {
          box-sizing: border-box;
        }

        html {
          width: 100%;
          overflow-x: hidden;
          overscroll-behavior-y: contain;
        }

        body {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          box-sizing: border-box;
          margin: 0;
          overscroll-behavior-y: contain;
          background-color: #000d0f;
          color: white;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          padding: 0;
          margin: 0;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0px;
        }

        .firebase-emulator-warning {
          display: none;
        }
        `,
  },
}
