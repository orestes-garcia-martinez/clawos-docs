---
title: Billing and Entitlements
description: How Pro access is granted and cached inside ClawOS.
sidebar:
  order: 2
---

## Source of truth

Polar is the billing source of truth.

## Fast path

Supabase stores the entitlement cache used during normal product requests.

## Important rule

The UI never grants Pro directly. Access flips only after the platform verifies billing state and
updates the internal entitlement model.
