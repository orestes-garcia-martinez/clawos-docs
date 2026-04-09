---
title: API Overview
description: High-level guide to the platform-facing API surface.
sidebar:
  order: 1
---

## Scope

These docs describe the platform-level API behavior that matters to the ClawOS product and docs site.

## Current priorities

- authenticated chat flow
- billing checkout and portal routes
- webhook verification behavior
- SSE-based streaming for the web channel

## Design rule

The API is part of the trusted platform layer. It should not expose billing or entitlement decisions as client-owned logic.
