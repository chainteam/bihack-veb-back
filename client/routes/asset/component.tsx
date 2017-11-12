import * as React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

import Form from './form';

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
                <Form
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