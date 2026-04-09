---
title: Channels and Identity
description: How ClawOS keeps one user identity across Web and Telegram.
sidebar:
  order: 2
---

## Canonical identity

ClawOS treats the platform user identity as canonical and maps channels into that identity.

## Current channels

- Web
- Telegram

## What channels do

Channels handle transport, presentation, and channel-specific authentication behavior.

They do **not** change the business logic of the skill engine.

## Why linking matters

When a user links Telegram to a web account, the goal is not to create a second profile. The goal is to let the same user move between channels while preserving the correct platform state.
