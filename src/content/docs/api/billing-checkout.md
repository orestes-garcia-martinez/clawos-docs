---
title: Billing Checkout
description: The route that starts the hosted Pro upgrade flow.
sidebar:
  order: 4
---

## Purpose

`POST /billing/checkout` creates a hosted Polar checkout session through the ClawOS backend.

## Who calls it

Today, both Web and Telegram can trigger the upgrade path through ClawOS rather than talking directly to Polar as if the client were the source of entitlement truth.

## Why this route matters

The important rule is:

- the client can start checkout
- the platform is still responsible for deciding when access actually changes

Checkout creation is not the same thing as entitlement activation.
