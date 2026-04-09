---
title: Upgrade to Pro
description: Understand how Pro access is granted inside ClawOS.
sidebar:
  order: 4
---

## Principle

The user interface starts the purchase flow, but it does not grant Pro directly.

## Real upgrade path

1. The authenticated UI asks the ClawOS API to create a checkout session.
2. The ClawOS API creates the Polar checkout.
3. Polar completes payment and sends a webhook.
4. ClawOS verifies the webhook.
5. ClawOS updates the internal entitlement cache.
6. The UI refreshes from ClawOS state.

## Why this matters

Regular app requests should rely on ClawOS entitlement state, not on client assumptions or direct billing calls.

## CareerClaw examples

Typical Pro unlocks include:

- deeper resume intelligence
- gap analysis
- tailored cover letters
- more advanced drafting support
