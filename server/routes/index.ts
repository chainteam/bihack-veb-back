import {Server} from 'hapi';

import staticRoute from './bundle';
import api from './api';
import mainRoute from './main';

export default (server: Server) => {
    staticRoute(server);
    api(server);
    mainRoute(server);
};
