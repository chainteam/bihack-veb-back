import * as React from 'react';
import styled from 'styled-components';

export default class AssetView extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <table>
                    <tbody>
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
                </table>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    background: #eee;
    border: 2px solid #aaa;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 30px;
`;

const Name = styled.td`
    font-weight: bold;
    width: 100px;
    font-size: 1.5em;
`;

const Value = styled.td`
    font-size: 1.5em;
`;
