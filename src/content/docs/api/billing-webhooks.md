---
title: Billing Webhooks
description: How Polar billing events become trusted internal state.
sidebar:
  order: 6
---

## Principle

A billing event matters only after the platform verifies it.

## What the current implementation does

In `apps/api/src/routes/billing.ts`, the webhook flow is:

1. read the raw request body
2. verify the webhook signature
3. perform idempotency checks in `billing_webhook_events`
4. map Polar state into internal entitlements
5. update Supabase cache used by the product

## Why this is important

Without this step, the platform would be trusting external billing signals before converting them into its own verified state.

That would weaken the trust model.

## The right way to explain it

The docs should present webhook handling as the bridge between:

- external billing events
- trusted internal product access
