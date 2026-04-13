---
title: Billing and Entitlements
description: How Pro access is granted, cached, and enforced inside ClawOS.
sidebar:
  order: 3
---

## Source of truth vs fast path

The current implementation uses two distinct layers:

- **Polar** is the billing source of truth
- **Supabase** stores the fast-read entitlement cache used by the app and API

This is visible directly in the codebase:

- `apps/api/src/routes/billing.ts`
- `apps/api/src/entitlements.ts`
- `packages/billing/*`

## What the UI does

The UI does not grant Pro.

It only:

1. asks ClawOS for a checkout session
2. redirects the user to Polar
3. refreshes after ClawOS updates its cached entitlement state

That is the correct trust model because the client is never treated as the authority for access.

## Current lifecycle

In the current platform code, the upgrade path is:

1. Web or Telegram requests `/billing/checkout`
2. the ClawOS API creates a hosted Polar checkout session
3. Polar sends webhook events back to ClawOS
4. ClawOS verifies the webhook signature
5. ClawOS updates `user_skill_entitlements` and refreshes `users.tier`
6. later product requests read the cached entitlement state from Supabase

## Why the cache exists

Normal product requests do **not** call Polar on the hot path.

That keeps:

- chat execution fast
- entitlement checks stable
- the product resilient to transient billing-provider issues

## What the worker trusts

The worker does not trust the UI either.

The API resolves entitlements first, then issues a signed skill assertion for the worker. The worker verifies that assertion before executing CareerClaw in the correct tier/feature mode.

## Current product reality

Today the live paid surface is **ClawOS Pro for CareerClaw**.

The docs should keep that language explicit instead of implying a broad multi-skill paid bundle that does not exist yet in the shipped product.
