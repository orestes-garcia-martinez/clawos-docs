---
title: Billing Checkout
description: The route that starts a hosted upgrade flow.
sidebar:
  order: 4
---

## Purpose

The checkout route creates a hosted billing session through the platform backend.

## Rule

The UI should request checkout from ClawOS, not talk to the billing provider directly as the source of entitlement truth.
