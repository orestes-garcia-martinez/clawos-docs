---
title: Billing and Entitlements
description: How Pro access is granted and cached inside ClawOS.
sidebar:
  order: 3
---

## Source of truth

**Polar** is the billing source of truth.

## Fast path used by the product

**Supabase** stores the entitlement cache used during normal requests.

## Important rule

The UI never grants Pro directly. Access changes only after the platform verifies billing state and updates the internal entitlement model.

## Lifecycle

1. UI requests checkout from ClawOS
2. API creates Polar checkout
3. Polar sends webhook events
4. ClawOS verifies the webhook
5. ClawOS updates entitlement state
6. UI and worker behavior reflect the updated cache

## Why this design is better

Routine product requests stay fast and stable because they do not depend on live billing calls on every interaction.
