---
title: Job Briefings
description: The core CareerClaw briefing workflow as it exists in the current platform.
sidebar:
  order: 2
---

## What a briefing does

A briefing is the main CareerClaw workflow.

In the current implementation, the API and worker cooperate to:

1. validate the request
2. load session context and profile state
3. call the LLM with CareerClaw tools
4. invoke the worker when a briefing run is needed
5. return ranked matches and allow follow-up actions

## What the web user sees

The web app uses SSE for a staged experience. Typical progress events include:

- fetching jobs
- scoring matches
- drafting outreach

Those progress events are channel behavior. The actual execution path is still platform API → worker → formatted response.

## What can happen after a briefing

A successful briefing creates the basis for follow-up actions such as:

- analysing a selected match
- generating a cover letter
- saving the job to the tracker
- updating a tracker status later

## Why this matters

CareerClaw is not just returning a static list. It is creating a session-aware workflow that later prompts can build on.
