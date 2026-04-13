---
title: Security and Trust
description: The concrete trust boundaries visible in the current ClawOS codebase.
sidebar:
  order: 5
---

## Trust is part of the implementation, not just the messaging

The current ClawOS platform codebase already encodes several trust decisions that the docs should explain plainly.

## First-party skill model

ClawOS does not expose a third-party runtime skill marketplace.

The platform is structured around first-party skills, verified worker execution, and repo-controlled releases.

## Current trust boundaries

### 1. Auth boundary

`apps/api/src/auth.ts` separates:

- direct web JWT auth
- trusted service-auth requests from internal adapters such as Telegram

### 2. Billing boundary

`apps/api/src/routes/billing.ts` verifies billing webhooks before updating internal state.

### 3. Worker boundary

The worker requires:

- `x-worker-secret`
- a valid signed skill assertion

That means skill execution is not client-controlled.

### 4. Resume boundary

`apps/api/src/routes/resume.ts` extracts text without treating raw PDFs as standard stored product state.

### 5. Session and tool boundary

`apps/api/src/routes/chat.ts` contains the platform-side rules that decide when tools run and how session state is merged.

## Why this matters for the docs site

The docs should reinforce that ClawOS is not a generic assistant wrapper.

It is a platform with:

- explicit auth paths
- explicit execution boundaries
- explicit entitlement verification
- explicit data-handling rules

That is a much stronger trust story than vague claims about being “secure.”
