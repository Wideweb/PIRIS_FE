import routing from './routing.js';
import routes from './routes.js';

export default ngModule => {
    routing(ngModule);
    routes(ngModule);
}