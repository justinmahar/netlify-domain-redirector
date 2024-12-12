<div align="center">
  <img src="https://github.com/justinmahar/netlify-domain-redirector/raw/master/public/logo192.png" width="100" />
</div>
<h2 align="center">
  Netlify Domain Redirector
</h2>
<h3 align="center">
  Easily redirect domain traffic via Netlify.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/netlify-domain-redirector" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/netlify-domain-redirector.svg" alt="npm Version" /></a> <a href="https://github.com/justinmahar/netlify-domain-redirector/fork"><img src="https://img.shields.io/badge/GitHub-Fork%20this%20repo-brightgreen"/></a> <a href="https://app.netlify.com/sites/netlify-domain-redirector-demo/deploys" target="_blank" rel="noopener noreferrer"><img src="https://api.netlify.com/api/v1/badges/fcf3fe57-4573-4503-8def-b52b97453fb7/deploy-status" alt="Netlify Status" /></a>
</p>
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>


## Overview

This project allows you to easily redirect domain traffic using server-side Netlify redirects.

The main use case for this project is changing the domain of a website. You can set up Netlify Domain Redirector to 
redirect all traffic from the old domain to your new domain, while preserving all links.

You can also use this project to send all traffic from a domain (or subdomain) to a single page, either permanently or temporarily.

It's quick, easy to use, and it's highly configurable. Just follow the steps below.

### Features include:

- **⚡️ Quick & Easy Setup**
  - Deploy to Netlify with a few clicks, follow the setup page, and you're good to go.
- **🆓 Free**
  - Netlify offers generous [free tier](https://www.netlify.com/pricing/) bandwidth, so this solution is likely free for most sites.
- **🔗 Links Are Preserved**
  - Easily use splats to ensure all links to your old domain are preserved.
- **🤖 Great For SEO**
  - All redirects are handled server-side via Netlify and can be set up the right way, so your SEO doesn't suffer.
- **⚙️ Highly Configurable**
  - Set up 301/302 redirects, path splats, and beyond—add all the complexity your heart desires!

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
- [Limitations \& Cost Estimates](#limitations--cost-estimates)
- [Contributing](#contributing)
- [Disclaimer](#disclaimer)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Demo

### Redirect Demo

The following instance of Netlify Domain Redirector will redirect all traffic to `https://github.com/`. 

Click the link below to see redirects in action:

[https://redirect-to-github.netlify.app/justinmahar](https://redirect-to-github.netlify.app/justinmahar)

When clicking this link, the path `/justinmahar` is preserved and you will be redirected to the same path on GitHub.

Try changing the path to your own GitHub username if you'd like to try it out.

> Note: The redirect being used by this deploy is: `/* https://github.com/:splat 301!`

### Setup Page Demo

The following setup page will be visible when you first deploy Netlify Domain Redirector:

- [View Default Setup Page](https://netlify-domain-redirector.netlify.app/)

Once you set up your redirects properly, this page will no longer appear.

## Setup

The steps are as summarized as follows:

1. Deploy this project to Netlify
2. Visit the site to configure your redirects
3. Set an environment variable in Netlify to your redirect config
4. Trigger a deploy and confirm your redirects are working
5. Assign the old domain to the site in Netlify. You're all done!

### 1. Deploy To Netlify

First, click this button to start a new deploy of Netlify Domain Redirector:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinmahar/netlify-domain-redirector)

Alternatively, you can fork the repo and deploy manually:

<a href="https://github.com/justinmahar/netlify-domain-redirector/fork">
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

Copy the value from the setup page, open your site in Netlify › Site configuration › Environment variables, and add the environment variable `REDIRECTS` using the copied value.

Then open Deploys and trigger a deploy.

Your redirects are now active! Confirm the redirects are working as expected.

### 4. Add Domain To Site

You can now add your old domain to the deployed Netlify Domain Redirector site via Netlify Domain management.

If you've used the splat example shown above, all traffic to the old domain will now redirect to the new one.

## How It Works

This project uses [Netlify _redirects](https://docs.netlify.com/routing/redirects/) to configure redirects. This is a plain text file that is written to the root directory of the deployed site.

Of course, you can use this file in your own Netlify project if you have one already. But in some cases, you just want to redirect all traffic from one domain to another one while preserving links, which is where Netlify Domain Redirector comes in. You do not need to change any files in the repo, `_redirects` configuration is done entirely via an environment variable.

During the build process, if the `REDIRECTS` environment variable is present for your site, the `_redirects` file is created with the items specified in that variable via a Node.js script. The `REDIRECTS` value itself is a JSON array of redirect strings. These values are logged during the build process if you'd like to see what's actually being written to this file for your deploy. Just review the Netlify build logs to see them.

The build also generates a small React app that contains the [setup page](https://netlify-domain-redirector.netlify.app/). This has instructions and a simple UI that makes it easy to create the redirects config for your site.

The React app is not meant for the public, it's just there for setup purposes, so it's recommended you force redirect your traffic with the bang `!` operator, like so:

```
/* https://example.com/:splat 301!
```

If no `REDIRECTS` environment variable is set for your site, a default `_redirects` file is used, which redirects all traffic to `/index.html` using the redirect `/* /index.html 200`. This causes the setup page to be shown when no redirects have been configured.

## Limitations & Cost Estimates

Netlify's [free tier](https://www.netlify.com/pricing/) covers 100GB of bandwidth, which accounts for a significant amount of redirect traffic.

A redirect response contains a small header and a location URL. If, on average, a redirect response consumes roughly 500 bytes of data, then:

```
100GB = 100 * 1024^3 bytes = 107,374,182,400 bytes
107,374,182,400 bytes / 500 bytes per redirect = 214,748,364 redirects
```

On the free tier, you can expect a maximum of around **214 million redirects**.

Therefore, this solution is most likely free for most situations!

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## Disclaimer

This project is not affiliated with [Netlify](https://netlify.com/) in any way. It is an unofficial solution made for/by the development community.

Be sure to read the project license for additional terms and conditions.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/netlify-domain-redirector/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/netlify-domain-redirector/stargazers): [👉⭐](https://github.com/justinmahar/netlify-domain-redirector/stargazers)

## License

See [LICENSE.md](https://github.com/justinmahar/netlify-domain-redirector/blob/master/LICENSE.md).