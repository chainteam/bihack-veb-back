import * as React from 'react';
import styled from 'styled-components';

export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <Title>ChainTeam</Title>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    margin: 100px auto;
    width: 600px;
`;

const Title = styled.h1`
    color: #666;
    font-size: 3em;
`;
