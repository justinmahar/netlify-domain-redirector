<div align="center">
  <img src="https://github.com/justinmahar/netlify-redirector/raw/master/public/logo192.png" width="100" />
</div>
<h2 align="center">
  ↪️ Netlify Redirector
</h2>
<h3 align="center">
  Easily redirect domain traffic via Netlify.
</h3>
<p align="center">
  <a href="https://github.com/justinmahar/netlify-redirector/fork"><img src="https://img.shields.io/badge/GitHub-Fork%20this%20repo-brightgreen"/></a> <a href="https://app.netlify.com/sites/netlify-redirector-demo/deploys" target="_blank" rel="noopener noreferrer"><img src="https://api.netlify.com/api/v1/badges/fcf3fe57-4573-4503-8def-b52b97453fb7/deploy-status" alt="Netlify Status" /></a>
</p>
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>


## Overview

This simple app allows you to easily redirect domain traffic using server-side Netlify redirects.

The main use case for this project is changing the domain of a website. You can set up Netlify Redirector to 
send all traffic from the old domain to your new domain.

It's quick, easy, and it's highly configurable. Just follow the steps below.

### Features include:

- **⚡️ Quick & Easy Setup**
  - Deploy to Netlify with a few clicks, follow the setup, and you're good to go.
- **🤖 Great For SEO**
  - All redirects are handled server-side via Netlify and can be set up the right way, so your SEO doesn't suffer.
- **⚙️ Highly Configurable**
  - Set up 301/302 redirects, path splats, and beyond—add all the complexity you'd like!

## Donate 

If this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!

<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>

## Table of Contents 

- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Demo](#demo)
  - [Redirect Demo](#redirect-demo)
  - [Setup Page Demo](#setup-page-demo)
- [Setup](#setup)
  - [1. Deploy To Netlify](#1-deploy-to-netlify)
  - [2. Open The Site \& Configure Redirects](#2-open-the-site--configure-redirects)
  - [3. Save Redirects In Netlify](#3-save-redirects-in-netlify)
  - [4. Add Domain To Site](#4-add-domain-to-site)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Demo

### Redirect Demo

The following instance of Netlify Redirector will redirect all traffic to `https://github.com/`. 

Click the link below to see redirects in action:

[https://netlify-redirector-demo.netlify.app/justinmahar/netlify-redirector](https://netlify-redirector-demo.netlify.app/justinmahar/netlify-redirector)

When clicking this link, the path is preserved and you will be redirected to the same path on GitHub, which is to the Netlify Redirector project repo.

Try changing the path to your own GitHub path if you'd like to try it out.

> Note: The redirect being used by this deploy is: `/* https://github.com/:splat 301!`

### Setup Page Demo

The following setup page will be visible when you first deploy Netlify Redirector:

- [View Default Setup Page](https://netlify-redirector.netlify.app/)

Once you set up your redirects properly, this page will no longer appear.

## Setup

### 1. Deploy To Netlify

First, click this button to start a new deploy of Netlify Redirector:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinmahar/netlify-redirector)

Alternatively, you can fork the repo and deploy manually:

<a href="https://github.com/justinmahar/netlify-redirector/fork">
  <img src="https://img.shields.io/badge/GitHub-Fork%20this%20repo-brightgreen"/>
</a>

### 2. Open The Site & Configure Redirects

Open the site and follow the instructions on the setup page to configure your redirects.

As an example, the following redirect will permanently send all traffic to the domain `example.com`:

```
/* https://example.com/:splat 301!
```

You can change `example.com` to your own domain to achieve the same behavior.

### 3. Save Redirects In Netlify

Copy the value from the setup page and save as the environment variable `REDIRECTS` for your site in Netlify via the site settings.

Then trigger a deploy.

Your redirects are now active! Confirm the redirects are working as expected.

### 4. Add Domain To Site

You can now add your old domain to the deployed Netlify Redirector site via Netlify.

If you've used the splat example shown above, all traffic to the old domain will now redirect to the new one.

## How It Works

This project uses [Netlify _redirects](https://docs.netlify.com/routing/redirects/) to configure redirects. This is a plain text file that is written to the root directory of the deployed site.

Of course, you can use this file in your own Netlify project if you have one already. But in some cases, you just want to redirect all traffic from one domain to another one while preserving links, which is where Netlify Redirector comes in. You do not need to change any files in the repo, `_redirects` configuration is done entirely via an environment variable.

During the build process, if the `REDIRECTS` environment variable is present for your site, the `_redirects` file is created with the items specified in that variable via a Node.js script. These values are logged during the build process if you'd like to see what's actually being written to this file for your deploy. Just review the Netlify build logs to see them.

The build also generates a small React app, which contains the [setup page](https://netlify-redirector.netlify.app/). This has instructions and a simple UI that makes it easy to create the redirects config for your site.

The React app is not meant for the public, it's just there for setup purposes, so it's recommended you force redirect your traffic with the bang `!` operator, like so:

```
/* https://example.com/:splat 301!
```

If no `REDIRECTS` environment variable is set for your site, a default `_redirects` file is used, which redirects all traffic to `/index.html` using the redirect `/* /index.html 200`. This causes the setup page to be shown when no redirects have been configured.

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/netlify-redirector/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/netlify-redirector/stargazers): [👉⭐](https://github.com/justinmahar/netlify-redirector/stargazers)

## License

See [LICENSE.md](https://github.com/justinmahar/netlify-redirector/blob/master/LICENSE.md).