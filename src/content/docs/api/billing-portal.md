---
title: Billing Portal
description: The route that sends an authenticated user into subscription management.
sidebar:
  order: 5
---

## Purpose

`POST /billing/portal` creates a hosted customer portal session for an already authenticated ClawOS user.

## Why it exists

ClawOS should let users manage billing through the provider's hosted surface without moving billing authority into the client application.

That keeps the product simple while preserving the platform's trust boundary.
