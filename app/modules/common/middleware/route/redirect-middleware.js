export const REDIRECT = 'redirect';

export default function redirectMiddleware($state) {
    return () => next => action => {
        const redirect = action[REDIRECT];

        if (typeof redirect === 'undefined') {
            return next(action);
        }

        let { state, params } = redirect;

        $state.go(state, params)
    };
}