---
title: Architecture Overview
description: High-level platform architecture for ClawOS.
sidebar:
  order: 1
---

## Layers

- Channel layer
- Agent layer
- Skills layer
- Platform layer

## Hosting model

A dedicated docs site lives separately from the ClawOS monorepo and app runtime, while the main
ClawOS platform continues to separate web, API, worker, and channel concerns.
