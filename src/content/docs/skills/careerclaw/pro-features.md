---
title: Pro Features
description: What changes when CareerClaw runs with Pro entitlements.
sidebar:
  order: 4
---

## The practical difference

Free should stay useful.

In the current platform, Pro is about deeper intelligence and higher-value execution, not about making the base product unusable.

## Current Pro-aware behaviors

The current codebase shows Pro-aware behavior in areas such as:

- extended top-k behavior for briefings
- deeper resume-aware analysis
- gap analysis
- cover letter generation
- stronger drafting paths

## Important platform rule

These features are not unlocked by the UI alone.

The real sequence is:

1. the platform resolves entitlement state
2. the API issues a signed skill assertion with the relevant tier/features
3. the worker verifies that assertion
4. CareerClaw executes in the correct mode

## Why this design matters

This keeps Pro access:

- verifiable
- server-controlled
- consistent across channels
- independent of client-side assumptions
