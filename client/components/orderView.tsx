import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

interface Props {
    order: IApp.IOrder;
    onDecision: (id, decision) => void;
}

export default class AssetView extends React.Component<Props, {}> {

    handleDecision = (decision) => {
        const { order, onDecision } = this.props;

        onDecision(order.Id, decision);
    }

    getAction() {
        const { order } = this.props;

        if (order.Status === 'pending') {
            let applyFn = this.handleDecision.bind(this, true);
            let discardFn = this.handleDecision.bind(this, false);

            return (
                <Actions>
                    <Button
                        type="primary"
                        shape="circle"
                        icon="check"
                        size="large"
                        onClick={applyFn}
                    />
                    <Button
                        type="primary"
                        shape="circle"
                        icon="close"
                        size="large"
                        onClick={discardFn}
                    />
                </Actions>
            );
        }
    }

    render() {
        const { order } = this.props;

        return (
            <Wrapper>
                <Table>
                    <tbody>
                        <tr>
                            <Name>
                                Status
                        </Name>
                            <Value>
                                {order.Status}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Title
                        </Name>
                            <Value>
                                {order.Title}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Owner
                        </Name>
                            <Value>
                                {order.Owner}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Value
                        </Name>
                            <Value>
                                {order.Value}
                            </Value>
                        </tr>
                    </tbody>
                </Table>
                {this.getAction()}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    margin-bottom: 30px;
    display: flex;
`;

const Table = styled.table`
    background: rgba(240, 250, 230, 0.5);
    border: 2px solid rgba(240, 250, 230, 0.9);
    border-radius: 10px;
    padding: 10px;
    width: 100%;
`;

const Actions = styled.div`
    width: 50px;
    padding: 15px 0 0 10px;
`;

const Name = styled.td`
    font-weight: bold;
    width: 100px;
    font-size: 1.5em;
`;

const Value = styled.td`
    font-size: 1.5em;
`;
