import * as React from 'react';
import styled from 'styled-components';
import { Modal, Steps } from 'antd';
const Step = Steps.Step;

import { AssetForm, AssetView, IdForm } from '../../components';

interface Prop {
    getAsset: (guid) => Promise<any>;
    saveOrder: (order) => Promise<any>;
}

interface State {
    step: number;
    asset: IApp.IAsset;
}

export default class Asset extends React.Component<Prop, State> {

    state = {
        step: 0,
        asset: null,
    }

    onSubmit = ({ title, owner, value }) => {
        this.props.saveOrder({
            title,
            owner,
            value,
            parentId: this.state.asset.Id
        }).then((data) => {
            info('Order added');
        });
    }

    onGetGuid = ({ id }) => {
        this.props.getAsset(id)
            .then((data) => {
                this.setState({ 
                    asset: data.asset,
                    step: 1, 
                });
            })
    }

    guidRender() {
        if (this.state.step === 0) {
            return (
                <IdForm
                    submit={this.onGetGuid}
                />
            );
        }
    }

    formRender() {
        if (this.state.step === 1) {
            return [
                <AssetView
                    key={0}
                    asset={this.state.asset}
                />,
                <AssetForm
                    key={1}
                    submit={this.onSubmit}
                />,
            ]
        }
    }

    render() {
        return (
            <Wrapper>
                <Title>Add Order for Asset</Title>
                <StepsStyled current={this.state.step}>
                    <Step title="Get Asset" description="Get Assets." />
                    <Step title="Create Order" description="Create Order." />
                </StepsStyled>
                {this.guidRender()}
                {this.formRender()}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 600px;
    margin: 50px auto;
`;

const StepsStyled = styled(Steps) `
    margin-bottom: 30px;
`;

const Title = styled.h1`
    margin-bottom: 30px;
    color; #666;
`;

function info(msg) {
    Modal.info({
        title: 'Add asset',
        content: (
            <div>
                <p>{msg}</p>
            </div>
        ),
        onOk() { },
    });
}