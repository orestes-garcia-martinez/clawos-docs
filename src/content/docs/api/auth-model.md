---
title: Auth Model
description: How authenticated requests enter the ClawOS platform.
sidebar:
  order: 2
---

## Two auth paths exist today

The current API middleware in `apps/api/src/auth.ts` supports two request types:

### 1. Web client auth

The web client sends:

- `Authorization: Bearer <supabase-jwt>`

The API validates the JWT with Supabase, resolves the user, and loads the cached tier.

### 2. Trusted service auth

Internal adapters such as Telegram use:

- `X-Service-Secret`
- `X-Service-Name`
- `X-User-Id`

This is not a public client shortcut. It is the internal adapter path for trusted channel services.

## Why this matters

ClawOS does not mix channel transport identity with platform identity.

Different request shapes can enter the system, but they still resolve to the same user and the same platform entitlement state.
