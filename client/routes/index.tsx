import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// import { initApp } from '../app/actions';
// import PageSpinner from '../components/PageSpinner';
import { routes } from '../models';

import Asset from './asset';
import Shell from './shell';
import Decide from './decide';
import Order from './order';
import Main from './main';

export interface IRoutesProps extends React.Props<any> { }
export class Routes extends React.Component<IRoutesProps, any> {

    render() {
        return (
            <Router>
                <AppWrap data-test-id="mainContent">
                    <Shell />
                    <Switch>
                        <Route exact path={routes.main} component={Main} />
                        <Route path={routes.decide} component={Decide} />
                        <Route path={routes.addobj} component={Asset} />
                        <Route path={routes.addorder} component={Order} />
                        <Redirect to={routes.main} />
                    </Switch>
                </AppWrap>
            </Router>
        );
    }
}

const mapStateToProps = (state) => { }
const mapDispatchToProps = (dispatch) => { }

export default connect()(Routes);

const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;
