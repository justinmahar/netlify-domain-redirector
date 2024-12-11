<div align="center">
  <img src="./screenshot.png" width="200" />
</div>

# Netlify Redirector

This is a simple React app that redirects any domain to another URL via Netlify.

It's quick, easy, and painless. Just follow the steps below.

## Demo

The following instance of Netlify Redirector will redirect to this project repo (`https://github.com/justinmahar/netlify-redirector`): 

[netlify-redirector-demo.netlify.app](https://netlify-redirector-demo.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fcf3fe57-4573-4503-8def-b52b97453fb7/deploy-status)](https://app.netlify.com/sites/netlify-redirector-demo/deploys)

## Setup

### 1. Deploy To Netlify

First, click this button to start a new deploy of Netlify Redirector:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinmahar/netlify-redirector)

Alternatively, you can clone a copy of this repo and deploy the repo manually:

<a href="https://github.com/justinmahar/netlify-redirector/generate">
  <img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/>
</a>

### 2. Set Up Your Redirect

When setting up your Netlify deploy, add an environment variable called `REACT_APP_REDIRECT_URL`, and set it to the URL you'd like to redirect to.

```
REACT_APP_REDIRECT_URL=https://www.github.com/
```

### 3. Verify Redirect Works

Once the deploy finishes, your redirect will be active.

Visit the Netlify site to confirm the redirect is working as expected.

From here, you can configure the deploy to use your origin domain through Netlify. [Read the instructions here.](https://docs.netlify.com/domains-https/custom-domains/)

## Tips

- **Be sure to redeploy.** You must redeploy your site after the environment variable has been configured.
- **Redirects are fast.** There is a 3-second delay before the React app (screenshot above) is rendered. The redirect will likely happen so quickly that you will not see it.
- **Reuse the same repo.** You can deploy the same repo as many times as you'd like in Netlify, each with different configured redirect URLs. You don't need a new repo for every redirected domain.

## Troubleshooting

`URIError: Failed to decode param '/%REACT_APP_REDIRECT_URL%'`

If you see this error, the `REACT_APP_REDIRECT_URL` environment variable may have been configured but not deployed yet. Make sure you trigger a new deploy after the variable has been configured. 

---

```
This site can’t be reached
The webpage at https://site-name.netlify.app/%REACT_APP_REDIRECT_URL% might be temporarily down or it may have moved permanently to a new web address.
ERR_HTTP2_PROTOCOL_ERROR
```

If you see this error, the `REACT_APP_REDIRECT_URL` environment variable may have been configured but not deployed yet. Make sure you trigger a new deploy after the variable has been configured. 