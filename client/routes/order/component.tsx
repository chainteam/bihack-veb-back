import * as React from 'react';
import styled from 'styled-components';
import { Modal, Steps } from 'antd';
const Step = Steps.Step;

import Guid from './guid';
import { AssetForm, AssetView } from '../../components';

interface Prop {
    saveAsset: (data) => Promise<any>;
}

interface State {
    step: number;
}

export default class Asset extends React.Component<Prop, State> {

    state = {
        step: 0
    }

    onSubmit = ({ title, owner, value }) => {
        this.props.saveAsset({
            title,
            owner,
            value,
        }).then((data) => {
            info(data.guid);
        });
    }

    onGetGuid = ({ guid }) => {
        console.log(guid);
        this.setState({ step: 1 });
    }

    guidRender() {
        if (this.state.step === 0) {
            return (
                <Guid
                    submit={this.onGetGuid}
                />
            );
        }
    }

    formRender() {
        if (this.state.step === 1) {
            return [
                <AssetView/>,
                <AssetForm
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

function info(guid) {
    Modal.info({
        title: 'Add asset',
        content: (
            <div>
                <p>Guid: {guid}</p>
            </div>
        ),
        onOk() { },
    });
}