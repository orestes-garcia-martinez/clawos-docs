---
title: CareerClaw Overview
description: The first live skill in the ClawOS platform.
sidebar:
  order: 1
  badge: Live
---

## What CareerClaw does today

CareerClaw is the first live skill inside ClawOS. In the current platform codebase it supports:

- fresh job briefings
- ranked match review
- application tracker updates
- gap analysis
- cover letter generation
- Pro-aware feature gating through platform entitlements

## Where the implementation lives

CareerClaw spans multiple platform layers:

- web workspace views in `apps/web`
- API orchestration in `apps/api/src/routes/chat.ts`
- worker execution in `apps/worker`
- shared prompt/contracts in `packages/shared`

## What CareerClaw does not own

CareerClaw is not the platform shell.

ClawOS still owns:

- identity
- channels
- billing and entitlements
- session persistence
- worker verification
- security boundaries

## Why this distinction matters

The product should feel like **ClawOS in CareerClaw mode**, not like a separate CareerClaw app that happens to sit inside the shell.
