import Raven from "raven-js";

function init() {    
    Raven.config('https://7f1c2d85da884c00a5fee590d1ec4897@o4503973919653888.ingest.sentry.io/4503973924765696', {
        release: '1.3.0',
        environment: 'development-test'
    }).install()
}

function log(error) {
    Raven.captureException(error);
}

export default {
    init,
    log
};