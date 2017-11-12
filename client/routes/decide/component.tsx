import * as React from 'react';
import styled from 'styled-components';

import { AssetView, OrderView } from '../../components';

const asset = {
    Guid: 'aaa',
    Title: 'Jgf',
    Name: 'Owner',
    Value: 1111,
    Status: 'done',
}

export default class Decide extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <AssetView
                    asset={asset}
                />
                <OrderView />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 600px;
    margin: 50px auto;
`;
