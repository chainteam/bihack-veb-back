import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from '../../models';

export default class Shell extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <Link
                    to={routes.main}
                >
                    Главная
                </Link>
                <Link
                    to={routes.decide}
                >
                    Приятние заявок
                </Link>
                <Link
                    to={routes.addobj}
                >
                    Добавить объект
                </Link>
                <Link
                    to={routes.addorder}
                >
                    Добавить заявку
                </Link>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    font-size: 1.4em;
`;

const Link = styled(NavLink)`

`;