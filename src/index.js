import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import logger from './services/logService';
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

logger.init();
// Sentry.init({
//     dsn: "https://7f1c2d85da884c00a5fee590d1ec4897@o4503973919653888.ingest.sentry.io/4503973924765696",
//     integrations: [new BrowserTracing()],
  
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
// });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
