import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        user-select: none;
        /* Prevent font scaling in landscape */
        -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
        -moz-text-size-adjust: none; /*Firefox*/
        -ms-text-size-adjust: none; /*Ie*/
        -o-text-size-adjust: none; /*old versions of Opera*/
    }

    *, body {
        font-family: 'Pretendard';
        line-height: 1.5;
    }

    body {
      margin: 0;
      width: 430px !important;
      min-height: 100vh;
      max-height: 100vh;
      user-select: none;
      background-color: #222222;
      @media (max-width: 400px) {
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
      }
    }

    html {
      display: flex;
      justify-content: center;
      --logo-height: 40px;
      --logo-width: 40px;
    }

    a {
      text-decoration: none;
    }

    input, textarea {
      &:focus {
      outline: none;
      }
      background-color: transparent;
      transition: all 0.3s ease-in-out;
      border-radius: 8px;
      border: 1px solid #D6D6D7;
      padding: 14px;
      &::placeholder {
        color: #C6C6C6;
      }
    }
    span {
      direction: ltr !important;
    }
    button {
      border-radius: 8px;
      color: white;
      font: inherit;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    ol, ul {
	    list-style: none;
    }

    blockquote, q {
	    quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
	    content: '';
	    content: none;
    }

    table {
	    border-collapse: collapse;
	    border-spacing: 0;
    }
    .ant-message-rtl{
      direction: ltr !important;
    }
    .ant-message-notice-content{
      padding: 0px !important;
      border-radius: 4px !important;
      background-color: transparent !important;
      box-shadow: none !important;
    }
    .ant-message-notice-wrapper{
      background: transparent !important;
      justify-content: center !important;
    }
    
    .ant-message-custom-content {
      display: flex;
      gap: 5px;  
      border-radius: 4px !important;
      align-items: center; 
      padding: 12px;
      direction: ltr !important;
    }
    
   
    .ant-message-notice {
        background: #333;
        color: #fff;
    }
    .ant-drawer-content-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .ant-drawer-content {
      width: 430px !important;
      border-radius: 20px 20px 0 0;

      @media (max-width: 430px) {
        min-width: 100%;
        max-width: 100%;
      }
  }








    @font-face {
      font-family: "Pretendard";
      font-weight: 400;
      font-style: normal;
      src: url("/fonts/Pretendard-Regular.woff2") format("woff2"),
        url("/fonts/Pretendard-Regular.ttf") format("truetype");
      font-display: swap;
    }

    @font-face {
      font-family: "Pretendard";
      font-weight: 500;
      font-style: normal;
      src: url("/fonts/Pretendard-Medium.woff2") format("woff2"),
        url("/fonts/Pretendard-Medium.ttf") format("truetype");
      font-display: swap;
    }

    @font-face {
      font-family: "Pretendard";
      font-weight: 600;
      font-style: normal;
      src: url("/fonts/Pretendard-SemiBold.woff2") format("woff2"),
        url("/fonts/Pretendard-SemiBold.ttf") format("truetype");
      font-display: swap;
    }

    @font-face {
      font-family: "Pretendard";
      font-weight: bold;
      font-style: normal;
      src: url("/fonts/Pretendard-Bold.woff2") format("woff2"),
        url("/fonts/Pretendard-Bold.ttf") format("truetype");
      font-display: swap;
    }
`;

export default GlobalStyle;
