import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

import { routes } from '../../models';

export default class Shell extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <Link
                    to={routes.main}
                >
                    <Icon 
                        type="home"
                        style={{ fontSize: 32, color: '#111' }}    
                    />
                </Link>
                <Link
                    to={routes.decide}
                >
                    <Icon 
                        type="solution"
                        style={{ fontSize: 32, color: '#111' }}    
                    />
                </Link>
                <Link
                    to={routes.addobj}
                >
                    <Icon 
                        type="inbox"
                        style={{ fontSize: 32, color: '#111' }}    
                    />
                </Link>
                <Link
                    to={routes.addorder}
                >
                    <Icon 
                        type="book"
                        style={{ fontSize: 32, color: '#111' }}    
                    />
                </Link>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    font-size: 1.4em;
    width: 50px;
    background: cadetblue;
`;

const Link = styled(NavLink)`
    display: block;
    margin-top: 15px;
    margin-left: 8px;
`;