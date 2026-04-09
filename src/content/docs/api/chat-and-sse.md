---
title: Chat and SSE
description: How the web channel streams progress and final responses.
sidebar:
  order: 3
---

## Web transport

The web app uses **server-sent events (SSE)** for streaming updates.

## Why SSE was chosen

SSE is a good fit for one-way progress delivery from the platform back to the web client.

## Typical progress messages

- fetching jobs
- scoring matches
- drafting outreach

## What users should understand

Streaming is channel behavior. The underlying workflow logic still belongs to the active skill.
