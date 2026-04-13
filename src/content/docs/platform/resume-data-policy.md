---
title: Resume Data Policy
description: How resume files and extracted resume text are handled today.
sidebar:
  order: 4
---

## Storage rule

The current platform stores **extracted resume text**, not the raw PDF, as the normal product baseline.

This behavior is implemented in `apps/api/src/routes/resume.ts` and reflected in the web client upload flow.

## What happens during upload

When a user uploads a PDF from the web app:

1. the file is sent to `/resume/extract`
2. the API extracts plain text from the PDF
3. the API optionally derives structured profile hints from the text
4. the raw PDF buffer is discarded
5. the extracted text is what the product persists for normal usage

## Limits in the current implementation

The current API route enforces:

- **5 MB maximum PDF size**
- **50,000 character maximum extracted text**

## Why this policy exists

This keeps the storage surface smaller and safer while still giving CareerClaw what it needs for:

- matching
- drafting
- resume-aware analysis
- profile prefill assistance

## What users should understand

The product is designed around a text representation of the resume, not around permanent raw document storage.

That means users can:

- view the stored extracted text
- clear it
- continue using resume-aware features without the platform keeping a document vault by default
