---
title: Application Tracker
description: How CareerClaw tracks saved, applied, and interviewing roles.
sidebar:
  order: 3
---

## Why the tracker matters

The tracker gives CareerClaw durable workflow state instead of forcing the user to restate job progress every time.

## Current status model

The current docs and UI align around these practical states:

- saved
- applied
- interviewing
- offer
- rejected

## How updates happen

Tracker updates are platform-mediated, not free-form client state.

Typical prompts include:

- `Save this job to my tracker`
- `I applied to this role`
- `I'm interviewing next Monday morning`

The API resolves the intended action, validates the target, then persists the update so later prompts can build on real state.

## Why this is useful

The tracker turns CareerClaw from a one-off search assistant into an ongoing workflow tool.

That is especially important across sessions and across channels.
