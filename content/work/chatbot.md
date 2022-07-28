---
title: "Chatbot"
draft: true
summary: "An ed-tech chatbot that connects students with tutors on WhatsApp instantly."
---

We wanted to create a platform where students could instantly connect with a tutor over a 1-on-1 live video call to help them with a particular topic. To make this as accessible as possible, we decided to build it on WhatsApp.

I started by laying out all the user flows and deriving the kind of entities and relationships we need. With this in hand, I conducted some research to figure out the best database for our platform. I decided on PostgreSQL for its flexibility after rejecting no-SQL since we had many strong relationships between entities.

Then, I explored ways I could interact with the WhatsApp API. I decided on Gupshup as our service provider because of the availability of an open-source adaptor for their API called "waio" for python. I ended up contributing to "waio" as well, since I needed additional functionality.

The next few weeks were spent building the platform server in python using asyncio, aiohttp, pydantic and SQLModel. A redis cache was added to hold the state of a user's conversation. The python server along with the PostgreSQL DB were deployed on Google Cloud Platform. I wrote some deploy scripts as well as documentation for them.

The video calls between students and tutors took place on our own video calling web app built in React using Vite with Typescript. It uses the Agora Javascript SDK for handling WebRTC and TailwindCSS for CSS styling. We have REST/RESTful APIs on the python server which are called to validate the session and log when the user joined and left the session.

I ran into some issues deploying a production python server. I learnt about process managers and web-servers as I tried to optimise our deployment. The final platform used Supervisord process manager behind an NGINX reverse proxy.

An admin dashboard was quickly built up using Appsmith. This has many SQL queries to show the stakeholders relevant metrics and stats.

The platform scaled to over 36,000 students and 1,000+ tutors with thousands of sessions taking place daily. This allowed the company to raise 1$ Million in pre-seed funding and grow their audience while building a native app experience.
