import React, { FunctionComponent } from 'react';
import Props from './button.d';
import * as Styles from './ButtonStyle';

const Button: FunctionComponent<Props> = ({ onClick, value, type, style }) => {

    const internalOnClick = () => {
        onClick();
    };

    const StyledButton = Styles[type];

    return (
        <StyledButton
            onClick={internalOnClick}
            style={style}
        >
            {value}
        </StyledButton>
    );
};

export default Button;
