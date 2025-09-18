---
title: "Custom Website Builder"
draft: false
summary: "A fully-featured website builder with 20+ blocks and 3 themes."
---

## Intro

> **Extensible**

That's the name of the game when coming up with a strategy for the evolving needs of a young organisation. And so, we set out to build a platform for the team at CPB Foundation to construct and grow the identities of their branches while staying swift and flexible.

## Choosing Tech

The CPB Foundation website had some ambitious requirements. It needed to be easy to customise and build by the content writers while having different themes for the different branches of the organisation.

The team was accustomed to WordPress and its world of themes and page builders. Unfortunately, these tools were often limited as you try to add features - either by the exponentially growing complexity or by rapidly degrading performance.

I had stumbled upon [PayloadCMS](https://payloadcms.com) at some point during my research and was convinced it was the right tool for the job. It allowed me to easily create these custom blocks like WordPress while leveraging all the other tools of the Javascript ecosystem like [Next.js](https://nextjs.org).

## Server-side Rendering

The requirement that factored in the choice of Next.js as the framework was SSR. For a growing organisation, the SEO benifits were too crucial to give up. On the other hand, this caused few unexpected issues with the CSS-in-JS library, [React JSS](https://cssinjs.org/react-jss). In the future, I would avoid runtime CSS-in-JS libraries and go for something like [Vanilla Extract](https://vanilla-extract.style/) if [TailwindCSS](https://tailwindcss.com) didn't fulfill my needs when using SSR.

I avoided static generation since Next.js's ISR on-demand wasn't out yet. And its not feasible to wait for cache invalidation while building new pages.

## Challenges

> ### How do you represent four branches of an organisation with equity?

With an interactive layout that makes it easy for the user to understand the purpose of each section without navigating away from the homepage.

{{< video "cpb-branches-css-animation.m4v">}}

_I'm really proud of coming up with this solution and successfully implementing it!_

> ### How do you serve a large JS app to users across the world?

- **Get it as small as you can** - Using [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer), I was able to identify an issue where the entire icons package (40kb) shipped to the user due to broken tree-shaking!
- **Use a CDN** - Cloudflare is an easy and reliable choice.

## Results

I created a pleasant experience for the content writers, giving them 20+ powerful components when creating pages or blog posts. Since it's self hosted on a VPS, we should never run into any bandwidth or bottleneck issues. The entire team was delighted with the capabilities and performance of the website.
