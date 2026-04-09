---
title: Architecture Overview
description: The platform layers behind ClawOS.
sidebar:
  order: 1
---

## Layer model

ClawOS separates the system into four practical layers:

1. **Channel layer** — Web and Telegram surfaces
2. **Agent layer** — orchestration and session-aware routing
3. **Skills layer** — workflow engines such as CareerClaw
4. **Platform layer** — auth, billing, telemetry, and shared guarantees

## Why this structure exists

This separation keeps the skill logic focused while preventing identity, billing, and channel behavior from leaking into every workflow implementation.

## Request shape

A typical request passes through this chain:

1. user sends a message through a channel
2. platform resolves identity and session context
3. agent layer determines the next action
4. skill engine executes and returns structured output
5. platform saves state and returns the result through the active channel
