import * as React from 'react';
import styled from 'styled-components';

import { AssetView, OrderView, IdForm } from '../../components';

interface Props {
    getAsset: (id) => Promise<any>;
}

interface State {
    asset: IApp.IAsset;
}

export default class Decide extends React.Component<Props, State> {

    state = {
        asset: null,
    }

    getId = ({ id }) => {
        this.props.getAsset(id)
            .then((data: any) => {
                this.setState({ asset: data.asset });
            })
    }

    showInfo() {
        if (this.state.asset) {
            return (
                <Info>
                    <AssetView
                        asset={this.state.asset}
                    />
                    <OrderView />
                </Info>
            )
        }
    }

    render() {
        return (
            <Wrapper>
                <Title>
                    Get Asset info
                </Title>
                <IdForm
                    submit={this.getId}
                />
                {this.showInfo()}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 600px;
    margin: 50px auto;
`;

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
`;

const Info = styled.div`

`;
