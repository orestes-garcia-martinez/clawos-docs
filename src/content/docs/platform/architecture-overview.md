---
title: Architecture Overview
description: The real platform layers and request path behind ClawOS.
sidebar:
  order: 1
---

## What exists in the current codebase

The current platform repo is split into four application surfaces plus shared packages:

- `apps/web` — React + Vite web client
- `apps/api` — Hono Agent API
- `apps/telegram` — Telegram adapter
- `apps/worker` — skill worker for verified skill execution
- `packages/shared`, `packages/security`, `packages/billing` — shared contracts and platform helpers

This is not just a conceptual diagram. The repo structure already enforces the platform boundary.

## Layer model

ClawOS currently operates through four practical layers:

1. **Channel layer** — Web and Telegram
2. **Agent layer** — API orchestration, session handling, tool routing, billing routes
3. **Skills layer** — verified worker execution for first-party skills such as CareerClaw
4. **Platform layer** — auth, identity, session persistence, entitlements, security controls

## Request flow in the current implementation

A normal CareerClaw request follows this path:

1. the user sends a message from Web or Telegram
2. the channel adapter authenticates the request into a canonical ClawOS user identity
3. `apps/api/src/routes/chat.ts` validates input and loads session state
4. the API calls the LLM with the CareerClaw system prompt and tool definitions
5. if a tool action is needed, the API issues a signed skill assertion and calls the worker
6. the worker verifies the assertion before executing the CareerClaw adapter
7. the API formats the final response, saves session state, and returns it through the active channel

## Why the worker exists

The worker is intentionally separate from the API:

- the API owns user trust boundaries and orchestration
- the worker owns verified skill execution
- the API never treats the client as the source of entitlement truth
- the worker does not accept unauthenticated skill execution

That separation is visible in the current code:

- `apps/api/src/routes/chat.ts`
- `apps/api/src/skill-assertions.ts`
- `apps/worker/src/index.ts`
- `apps/worker/src/assertion-verifier.ts`

## Current platform truth

Today, **CareerClaw is the only live skill**, but the shell, registry, and worker structure are already platform-shaped rather than single-skill shortcuts.

That matters because the docs should explain ClawOS as a platform with one live skill, not as a CareerClaw app with extra pages around it.
