import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-color-primary: #27ae60;
	  --color-color-secondary: #eb5757;
    --color-grey-0: #f5f5f5;
	  --color-grey-600: #333333;
	  --color-grey-300: #828282;
	  --color-grey-100: #e0e0e0;
    --color-grey-400: #bdbdbd;
	  --color-negative: #e60000;
	  --color-warning: #ffcd07;
	  --color-sucess: #168821;
	  --color-information: #155bcb;
    --color-white: #FFFFFF;

    --font-primary: "Inter", sans-serif;

    --font-weight-0: 700;
    --font-weigth-1: 600;
    --font-weigth-2: 400;

    --font-size-1: 1.125rem;
    --font-size-2: 1rem;
    --font-size-3: 0.875rem;
    --font-size-4: 0.75rem;
  }
`