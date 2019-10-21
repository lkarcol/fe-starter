import React from 'react';
import { Button } from '../components/common/ui';

const Index = () => {
    return (
        <div>
            <Button value='Test' onClick={() => true} type='Big' />
            <Button value='Test' onClick={() => true} type='Small' />
            <Button value='Test' onClick={() => true} type='Funny' style={{ marginTop: '50px' , marginLeft:'80px' }} />
        </div>
    );
};

export default Index;
