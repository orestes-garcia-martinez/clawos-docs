---
title: Chat and SSE
description: How the current web chat flow streams progress and final responses.
sidebar:
  order: 3
---

## Web transport

The web app uses **server-sent events (SSE)** for chat streaming.

This is implemented in:

- `apps/web/src/lib/api.ts`
- `apps/web/src/hooks/useSSEChat.ts`
- `apps/api/src/routes/chat.ts`

## Event types in the current implementation

The current web client understands these event types:

- `progress`
- `chunk`
- `done`
- `error`

## Typical progress messages

The current API route explicitly describes staged updates such as:

- fetching jobs
- scoring matches
- drafting outreach

## Why SSE was chosen

SSE is a good fit for the current one-way streaming model:

- the client sends one request
- the platform streams progress and final content back
- the browser does not need a full duplex socket just to show staged progress

## Important mental model

Streaming belongs to the **channel layer**.

The skill logic still lives behind the platform API and worker path.
