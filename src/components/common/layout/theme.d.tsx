import '../../node_modules/@types/styled-components/index';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            action: string;
            text: string;
            selected: string;
            hover: string;
            tag: string;
            placeholder: string;
            highlight: string;
            white: string;
            orange: string;
        };
        fonts: {
            regular: string;
            medium: string;
            semi: string;
        };
        breakpoints: {
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
        };
        media: any;
    }
}
