---
title: Error Model
description: How to think about errors across the ClawOS platform and CareerClaw workflow.
sidebar:
  order: 7
---

## The main split

The current implementation naturally divides errors into two layers.

### Platform errors

These belong to ClawOS itself, for example:

- auth failures
- billing route failures
- invalid link-token service configuration
- worker verification failures
- transport or streaming failures

### Skill/workflow errors

These belong to the active workflow running inside the platform, for example:

- invalid job target resolution
- missing profile data for a briefing run
- worker execution timeout for a skill action
- failure inside a specific drafting or analysis step

## Why this distinction helps

Users and operators should be able to tell the difference between:

- “the platform could not authorize or route this request”
- “the active skill could not complete this workflow step”

That distinction makes support, debugging, and future docs structure much clearer.
