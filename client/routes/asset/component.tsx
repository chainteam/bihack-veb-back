import * as React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

import { AssetForm } from '../../components';

interface Prop {
    saveAsset: (data) => Promise<any>;
}

export default class Asset extends React.Component<Prop, {}> {

    onSubmit = ({ title, owner, value }) => {
        this.props.saveAsset({
            title,
            owner,
            value,
        }).then((data) => {
            info(data.guid);
        });
    }

    showGuid() {

    }

    render() {
        return (
            <Wrapper>
                <Title>Add Asset</Title>
                <AssetForm
                    submit={this.onSubmit}
                />
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
    margin-bottom: 20px;
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