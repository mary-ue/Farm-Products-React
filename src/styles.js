import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  height: 100%;
}

body {
  position: relative;
  min-width: 320px;
  ${'' /* min-height: 100%; */}
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeDefault};
  line-height: 1.5;
  font-weight: 400;
  color: ${props => props.theme.colorBlackForText};
  background-color: #ffffff;
}

img,
svg {
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: auto;
}

button {
  display: block;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
h4,
p,
figure {
  margin: 0;
}

fieldset {
  padding: 0;
  margin: 0;
  border: none;
}

.visuallyHidden {
  position: fixed;
  transform: scale(0);
}
`;
