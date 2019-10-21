import { css, DefaultTheme } from 'styled-components';

const breakpoints = {
    xl: 1270,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 350,
};

const media = (breakpoints) => {
    return Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (literals, ...args) => css`
          @media (max-width: ${ breakpoints[label]}px) {
            ${css(literals, ...args)}
          }
        `;
        return acc;
    }, {});
};

const CssMediaQueries = media(breakpoints);

const Theme: DefaultTheme = {
    colors: {
        action: '#c69656',
        text: '#000000',
        selected: '#6dc943',
        hover: '#86ea58',
        tag: '#d1d3d6',
        placeholder: '#9b9b9b',
        highlight: '#6DC943',
        white: 'white',
        orange: '#f65f1e',
    },
    fonts: {
        regular: 'HKGrotesk-Regular, sans-serif',
        medium: 'HKGrotesk-Medium, sans-serif',
        semi: 'HKGrotesk-Semi, sans-serif',
    },
    breakpoints,
    media: CssMediaQueries,
};

export default Theme;
