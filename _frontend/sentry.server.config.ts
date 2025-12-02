import * as Sentry from "@sentry/nuxt"
 
Sentry.init({
  dsn: "https://bef000a57d3cde41591887d2de1e2baf@o307076.ingest.us.sentry.io/4509550381826048",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false
})
