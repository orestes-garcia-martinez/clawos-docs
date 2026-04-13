---
title: Channels and Identity
description: How ClawOS keeps one user identity across Web and Telegram.
sidebar:
  order: 2
---

## Canonical identity

ClawOS treats the **platform user identity** as canonical.

Channels do not create separate product identities. They map into the same underlying ClawOS user.

## What the current codebase shows

The current platform supports two auth paths in `apps/api/src/auth.ts`:

- **JWT auth** for the web client
- **service auth** for trusted internal adapters such as Telegram

Both paths resolve into the same canonical ClawOS user and the same entitlement state.

## Telegram linking model

The Telegram linking flow is intentionally not OAuth-heavy.

Current implementation:

1. the web app requests a link token from `/link-token`
2. the API generates a raw token and stores only its HMAC hash server-side
3. the user sends `/link <token>` to the Telegram bot
4. the Telegram adapter redeems the token atomically
5. the Telegram identity is attached to the web user identity

That keeps the model simple, explicit, and single-use.

## Why this matters

The user should not feel like they created a second account when they move between Web and Telegram.

The goal is one platform identity, one billing relationship, and one consistent state model across channels.
