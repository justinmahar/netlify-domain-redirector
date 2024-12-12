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

For example:

```
REACT_APP_REDIRECT_URL=https://www.github.com/
```

By default, the route will be preserved. If you'd like to ignore the route and only redirect to your target URL, add the `REACT_APP_IGNORE_ROUTE` environment variable and set it to the string `true`.

### 3. Verify Redirect Works

Once the deploy finishes, your redirect will be active.

Visit the Netlify site to confirm the redirect is working as expected.

From here, you can configure the deploy to use your origin domain through Netlify. [Read the instructions here.](https://docs.netlify.com/domains-https/custom-domains/)

## Tips

- **Be sure to redeploy.** You must redeploy your site after the environment variable has been configured.
- **Redirects are fast.** There is a 3-second delay before the React app (screenshot above) is rendered. The redirect will likely happen so quickly that you will not see it.
- **Reuse the same repo.** You can deploy the same repo as many times as you'd like in Netlify, each with different configured redirect URLs. You don't need a new repo for every redirected domain.

## How It Works

The app uses 2 techniques to redirect the user's browser to your target.

1. `meta refresh`: The oldest trick in the book still works. The app uses a `<meta>` refresh tag to redirect the browser. [More info here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#refresh)
2. `window.open`: The app will use window.open with a target of `_self` immediately after rendering completed. [More info here.](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

## Options

You can set the following environment variables strings to modify the behavior and appearance of this application.

| Environment Variable                       | Description                                                                                                                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_REDIRECT_URL`                   | **Required.** The URL to redirect to.                                                                                                                                                                                                                |
| `REACT_APP_IGNORE_ROUTE`                   | Optional. By default, the route is preserved. Set to `true` to ignore the route and redirect to the URL only.                                                                                                                                        |
| `REACT_APP_AUTOMATIC_REDIRECTION_DISABLED` | Optional. By default, redirection occurs automatically. Set to `true` to disable this behavior.                                                                                                                                                      |
| `REACT_APP_DARK_MODE_ENABLED`              | Optional. When `true`, the redirect page will appear in dark mode.                                                                                                                                                                                   |
| `REACT_APP_BG_COLOR`                       | Optional. Specify the background color of the redirect page.                                                                                                                                                                                         |
| `REACT_APP_FG_COLOR`                       | Optional. Specify the foreground text color of the redirect page.                                                                                                                                                                                    |
| `REACT_APP_IMG_DISABLED`                   | Optional. When `true`, the image will not be shown on the redirect page, for a simpler look.                                                                                                                                                         |
| `REACT_APP_MESSAGE_TEXT`                   | Optional. Customize the message shown. Default is "Redirecting..."                                                                                                                                                                                   |
| `REACT_APP_MESSAGE_DISABLED`               | Optional. When `true`, the message will not be shown on the redirect page.                                                                                                                                                                           |
| `REACT_APP_LINK_TEXT`                      | Optional. Customize the link text. Default is "Click here to proceed"                                                                                                                                                                                |
| `REACT_APP_LINK_DISABLED`                  | Optional. When `true`, the redirect link will not be shown. Not recommended.                                                                                                                                                                         |
| `REACT_APP_PAGE_TITLE`                     | Optional. Customize the title of the page.                                                                                                                                                                                                           |
| `REACT_APP_RENDER_DELAY`                   | Optional. By default, the redirect page is not rendered for 3000 milliseconds (3 seconds). You can customize this delay in millis, or set it to 0 for no delay. In most cases, the redirect will occur so quickly that the page will never be shown. |

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