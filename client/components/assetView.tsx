import * as React from 'react';
import styled from 'styled-components';

interface Props {
    asset: IApp.IAsset;
}

export default class AssetView extends React.Component<Props, {}> {
    render() {
        const { asset } = this.props;

        return (
            <Wrapper>
                <table>
                    <tbody>
                        <tr>
                            <Name>
                                Id
                            </Name>
                            <Value>
                                {asset.Id}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Status
                            </Name>
                            <Value>
                                {asset.Status}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Title
                            </Name>
                            <Value>
                                {asset.Title}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Owner
                            </Name>
                            <Value>
                                {asset.Owner}
                            </Value>
                        </tr>
                        <tr>
                            <Name>
                                Value
                            </Name>
                            <Value>
                                {asset.Value}
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
