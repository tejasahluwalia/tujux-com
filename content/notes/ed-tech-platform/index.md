---
title: "Ed-Tech Platform"
draft: false
summary: "A 1-on-1 ed-tech platform that connects students with tutors over WhatsApp instantly."
---

## Intro

At Mentor Match, we wanted to revolutionize learning for students by providing them with quick and accessible help anytime they need it. The team had an ingenious idea - ask students to send a picture of the question they were having trouble with, and send that picture to hundreds of college students who would be paid per question they answered. Once they had a willing tutor ready to get on a call, they would connect the student and tutor over video call and voila! Problem solved.

I was tasked with automating as much of this process as possible. The goal was to be able to scale to tens of thousands of students in 2-3 months.

## The Foundation

Not just our user base, but over 500 million Indians use WhatsApp. So it was a no-brainer to build our platform on WhatsApp to reach as many students as possible. But we didn't know if our complex flow would be supported. I first experimented with ready-made solutions like [AISensy](https://aisensy.com), but they failed to fulfil our needs. I concluded that we must use a WhatsApp Business Service Provider to provide me with an API and run our backend that will handle the process.

I scoured Github for any packages that could help me and was delighted to discover [waio](https://github.com/dotX12/waio). It's a python package which wrapped [Gupshup.io's](https://www.gupshup.io/) WhatsApp API and made it convenient to maintain the kind of control we needed. Thus the tech decisions of a python backend and Gushup's service were obvious. I found modern python with asyncio, aiohttp and pydantic type hints pleasant to work with, but in the end, I would rather have used a compiled language like Go or Rust because we ended up facing runtime bugs with python that were tricky to track down and caused a lot of pain as more and more things break.

For the database, I knew we needed SQL since I had worked out the kinds of entities and relations we would require. I picked PostgreSQL, but MySQL or SQlite would've been fine too. [SQLModel](https://sqlmodel.tiangolo.com/) was my ORM of choice since it had nice docs and was built by the author of FastAPI.

And finally, since we can't tap into WhatsApp's in-built video calling feature, we had to build our own. So I spun up a React app with Vite and tried the ready-made templates from providers like [VideoSDK](https://videosdk.live/), [100ms](https://www.100ms.live/) and [Agora](https://www.agora.io/en/). WebRTC is a whole beast of its own, and this journey taught me a lot about browser APIs, users and just how painful Safari can be.

## Video Calling

Out of the three providers we tried, I would use VideoSDK and 100ms again. Agora's SDK is a pain to work with not to mention that they are also the most expensive option. The call quality is comparable between the three and would depend more on the user's internet bandwidth.

Getting the video call to work consistently on a vast range of phones (everything from Redmi to iPhone) required way more effort than I could've imagined.

- Dear Samsung, I have no idea what you're doing with your mobile browser, but it sucks, sorry.
- Dear Apple, please fix this [webkit bug](https://bugs.webkit.org/show_bug.cgi?id=230902)
- Dear Users, we can't help you if all you tell us is that "It doesn't work"

Well, the last one can be fixed quite easily, it's just infuriating when it happens. I asked our customer support team to retrieve answers to a canned set of debugging questions from anyone who reported an issue.

The rest of the React app is quite simple. It just sends out a bunch of API calls to our server on various events (call start, end, etc) so that we can track them.

## Learnings

A lot of challenges I faced were related to being a funded startup looking to grow big and grow fast. I had to resist the urge to try experimental tech, onboard new hires and get them familiar with the codebase, document evolving functionality and code, and track and report progress.

Runtime bugs are the worst. I `grep` 'ed through thousands of lines of system logs to find issues caused by python workers hanging and timing out.

Since I was reliant on waio, I ended up contributing to the open-source repository when I needed features it didn't already provide. I joined a telegram group with the author, and we discussed how the feature I needed should be added and we had the [pull request](https://github.com/dotX12/waio/pull/7) merged within a week of starting our conversation.

I am grateful to [Appsmith](https://appsmith.com) for providing an incredibly powerful low-code builder. It completely changed my opinion on this kind of tool. I was able to quickly get a dashboard up and running for everyone else on the team to access.

## Conclusion

Two months after I was handed this task, we were able to onboard a thousand students and a few hundred tutors onto the new platform.

And within a month from then, we had 30,000 students and 1,000 tutors with thousands of sessions a day.

The entire team did a great job, and I am proud of what we were able to accomplish in a short period of time.
