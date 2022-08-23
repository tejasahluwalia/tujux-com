---
title: "Custom Website Builder"
draft: false
summary: "A fully-featured website builder with 20+ blocks and 3 themes."
---

## Intro

The CPB Foundation website had some ambitious requirements. It needed to be easy to customize and build by the content writers while having different themes for the different branches of the organisation.

In order to achieve this. I pushed back on the use of Wordpress and decided to build it in React using Javascript/Typescript and Next.js. Since these allow me to create themable components and reuse them as blocks.

Using PayloadCMS, I was able to create a pleasant experience for the content writers, while giving them 20+ powerful components to use when creating pages or blog posts. It also provides REST/RESTful APIs for fetching and manipulating data.

I used CSS-in-JS for styling and server-rendering of all pages for SEO. This is fronted by Cloudflare's CDN so that high traffic would not bog down the server. The server is hosted on DigitalOcean and runs behind an NGINX reverse proxy along with some other subdomains of the organisation.

The entire team was happy with the capabilities and performance of the website.
