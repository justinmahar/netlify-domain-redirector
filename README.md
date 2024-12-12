<div align="center">
  <img src="./screenshot.png" width="200" />
</div>
<h2 align="center">
  ↪️ Netlify Redirector
</h2>
<h3 align="center">
  Easily redirect a domain to any URL via Netlify, with link preservation
</h3>
<p align="center">
  <a href="https://app.netlify.com/sites/netlify-redirector-demo/deploys" target="_blank" rel="noopener noreferrer"><img src="https://api.netlify.com/api/v1/badges/fcf3fe57-4573-4503-8def-b52b97453fb7/deploy-status" alt="Netlify Status" /></a>
</p>
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>


## Overview

This is a simple React app that allows you to set up redirects for a configured domain via Netlify redirects.

A common use case for this project is changing the domain of a website. You can set up Netlify Redirector to 
send all traffic to your new domain, then assign the old domain to Netlify Redirector.

It's quick, easy, and painless. Just follow the steps below.

### Features include:

- **⚡️ Quick & Easy Setup**
  - Deploy to Netlify with a few clicks, follow the setup, and you're good to go.
- **🤖 Server-Side Redirects, Great For SEO**
  - All redirects are handled server-side via Netlify, and can be done "the right way" so your SEO doesn't suffer.
- **⚙️ Highly Configurable**
  - Set up 301s, 302s, and beyond—add all the complexity you'd like!

## Donate 

If this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!

<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>

## Table of Contents 

- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Demo](#demo)
- [Setup](#setup)
  - [1. Deploy To Netlify](#1-deploy-to-netlify)
  - [2. Open The Site \& Configure Redirects](#2-open-the-site--configure-redirects)
  - [3. Save Redirects In Netlify](#3-save-redirects-in-netlify)
  - [4. Add Domain To Site](#4-add-domain-to-site)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Demo

The following instance of Netlify Redirector will redirect all traffic to `https://github.com/`.

[netlify-redirector-demo.netlify.app/justinmahar/netlify-redirector](https://netlify-redirector-demo.netlify.app/justinmahar/netlify-redirector)

If the redirect is successful, the path will be preserved and you will be sent to the Netlify Redirector project repo. 👍

## Setup

### 1. Deploy To Netlify

First, click this button to start a new deploy of Netlify Redirector:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinmahar/netlify-redirector)

Alternatively, you can clone a copy of this repo and deploy the repo manually:

<a href="https://github.com/justinmahar/netlify-redirector/generate">
  <img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/>
</a>

### 2. Open The Site & Configure Redirects

Open the site and follow the instructions to configure your redirects.

### 3. Save Redirects In Netlify

Copy the value from the setup page and save as the environment variable REDIRECTS for your site in Netlify. Then trigger a deploy.

Your redirects are now active!

### 4. Add Domain To Site

You can now add your old domain to the deployed Netlify Redirector site via Netlify.

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/netlify-redirector/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/netlify-redirector/stargazers): [👉⭐](https://github.com/justinmahar/netlify-redirector/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/netlify-redirector/?path=/docs/license--docs).