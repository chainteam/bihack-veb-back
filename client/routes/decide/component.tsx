import * as React from 'react';
import styled from 'styled-components';

import { AssetView, OrderView } from '../../components';

export default class Decide extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <AssetView />
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
