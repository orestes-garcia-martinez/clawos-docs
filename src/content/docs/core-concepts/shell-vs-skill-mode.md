---
title: Shell vs Skill Mode
description: The core interaction model behind ClawOS.
sidebar:
  order: 1
---

## The simple rule

**ClawOS owns the frame. The active skill owns the mode.**

## Platform-owned responsibilities

The shell is responsible for:

- identity
- channels
- billing
- session continuity
- security boundaries
- navigation between platform and skill surfaces

## Skill-owned responsibilities

A skill is responsible for the workflow that the user is actually trying to complete.

For CareerClaw, that means:

- job briefings
- match analysis
- application tracking
- draft generation

## Why this matters

This model prevents the product from collapsing into one noisy assistant thread. It keeps work focused while still allowing the platform to grow into multiple skills over time.
