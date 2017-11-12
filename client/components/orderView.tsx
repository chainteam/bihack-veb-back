import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

export default class AssetView extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <Table>
                    <tbody>
                        <tr>
                            <Name>
                                Status
                        </Name>
                            <Value>
                                Pedning
                        </Value>
                        </tr>
                        <tr>
                            <Name>
                                Title
                        </Name>
                            <Value>
                                Моя хатка с краю
                        </Value>
                        </tr>
                        <tr>
                            <Name>
                                Owner
                        </Name>
                            <Value>
                                Васька
                        </Value>
                        </tr>
                        <tr>
                            <Name>
                                Value
                        </Name>
                            <Value>
                                100000
                        </Value>
                        </tr>
                    </tbody>
                </Table>
                <Actions>
                    <Button type="primary" shape="circle" icon="check" size="large" />
                    <Button type="primary" shape="circle" icon="close" size="large" />
                </Actions>
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
