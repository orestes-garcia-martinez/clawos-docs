---
title: Channels
description: How Web and Telegram map into the same ClawOS platform.
sidebar:
  order: 2
---

## Current channels

The current platform codebase supports two active channels:

- **Web** — the primary rich client in `apps/web`
- **Telegram** — the messaging adapter in `apps/telegram`

The roadmap still leaves room for WhatsApp later, but the live product today is Web + Telegram.

## The important rule

Channels are adapters.

They change:

- transport
- rendering style
- authentication path
- upload flow
- response delivery format

They do **not** change:

- the canonical user identity
- the active skill's business logic
- the entitlement model
- the worker verification model

## Web channel

The web app uses:

- Supabase JWT auth
- SSE streaming for `/chat`
- a dedicated resume extraction route
- direct billing checkout and portal requests through the ClawOS API

Relevant files:

- `apps/web/src/lib/api.ts`
- `apps/web/src/hooks/useSSEChat.ts`
- `apps/api/src/routes/chat.ts`
- `apps/api/src/routes/resume.ts`

## Telegram channel

The Telegram adapter uses:

- Telegram webhook delivery
- service-auth headers to call the Agent API
- channel identity mapping into the canonical ClawOS user
- `/link <token>` account linking for Telegram-to-web merge

Relevant files:

- `apps/telegram/src/index.ts`
- `apps/telegram/src/link.ts`
- `apps/api/src/auth.ts`
- `apps/api/src/routes/link-token.ts`

## Why this structure is better

ClawOS does not fork business logic per channel.

Web and Telegram both route into the same platform core, which means:

- one user identity
- one entitlement model
- one session model
- one platform trust boundary

That is the right mental model for the docs and for the product.
