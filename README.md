<div align="center">
  <img src="https://github.com/justinmahar/netlify-redirector/blob/master/public/logo192.png?raw=true" width="100" />
</div>

# Netlify Redirector

This is a simple React app that redirects any domain to another URL via Netlify.

It's quick, easy, and painless. Just follow the steps below.

<!-- ![Screenshot](./screenshot.png) -->

## Setup

### 1. Deploy To Netlify

First, click this button to start a new deploy of Netlify Redirector:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinmahar/netlify-redirector)

Alternatively, you can clone a copy of this repo and deploy the repo manually:

<a href="https://github.com/justinmahar/netlify-redirector/generate">
  <img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/>
</a>

### 2. Set Up Netlify Deploy

When setting up your Netlify deploy, add an environment variable called `REACT_APP_REDIRECT_URL`, and set it to the URL you'd like to redirect to.

```
REACT_APP_REDIRECT_URL=https://www.github.com/
```

### 3. Verify Redirect Works

Once the deploy finishes, your redirect will be active.

Visit the Netlify site to confirm the redirect is working as expected.

From here, you can configure the deploy to use your origin domain through Netlify. [Read the instructions here.](https://docs.netlify.com/domains-https/custom-domains/)

## Troubleshooting

`URIError: Failed to decode param '/%REACT_APP_REDIRECT_URL%'`

If you see this error, the `REACT_APP_REDIRECT_URL` environment variable may have been configured but not deployed yet. Make sure you trigger a new deploy after the variable has been configured. 

```
This site can’t be reached
The webpage at https://site-name.netlify.app/%REACT_APP_REDIRECT_URL% might be temporarily down or it may have moved permanently to a new web address.
ERR_HTTP2_PROTOCOL_ERROR
```

If you see this error, the `REACT_APP_REDIRECT_URL` environment variable may have been configured but not deployed yet. Make sure you trigger a new deploy after the variable has been configured. 