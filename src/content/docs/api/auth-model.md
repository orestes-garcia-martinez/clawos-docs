---
title: Auth Model
description: How authenticated requests enter the platform.
sidebar:
  order: 2
---

## Authentication boundary

The platform API validates authenticated user requests before executing product logic.

## Why it matters

This keeps channels, identity, sessions, and entitlements tied to the same platform trust boundary instead of scattering access decisions across the UI.
