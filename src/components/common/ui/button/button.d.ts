import CSS from 'csstype';

type ButtonType = 'Big' | 'Small' | 'Funny';

export default interface Props {
    value: string;
    onClick: () => void;
    type: ButtonType;
    style?: CSS.Properties;
}