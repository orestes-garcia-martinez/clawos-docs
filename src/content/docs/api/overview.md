---
title: API Overview
description: The platform-facing API surface that matters to the shipped ClawOS product.
sidebar:
  order: 1
---

## Scope

These docs focus on the platform API behaviors that are already visible in the current codebase and product flow.

## Current priority routes

The current platform implementation centers on:

- authenticated chat execution
- SSE streaming for the web client
- resume extraction
- Telegram link-token creation
- billing checkout and billing portal routes
- verified billing webhooks

## Why this API is platform-owned

The API is not just a thin transport wrapper.

It owns:

- auth boundary enforcement
- session loading and saving
- entitlement resolution
- worker invocation and signed assertions
- billing verification

That is why the docs should describe it as part of the trusted platform layer, not as client-owned glue code.
