import styled from 'styled-components';

const DefaultButton = styled.button`
    width:150px;
`;

const FunnyButton = styled(DefaultButton)`
    height:90px;
    border:1px dashed red;
`;

const BigButton = styled(DefaultButton)`
    height:50px;
`;

const SmallButton = styled(DefaultButton)`
    height:25px;
`;

export {
    FunnyButton as Funny,
    BigButton as Big,
    SmallButton as Small,
};
