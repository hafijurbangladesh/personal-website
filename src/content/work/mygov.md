---
title: 'myGov: unified citizen service platform'
summary: 'Architecting a single platform that connects citizens to government services through shared, reusable components and national system integrations.'
meta: 'Solutions Architect · a2i · 2018–2023'
tags: ['DPI', 'Interoperability', 'GovTech']
order: 1
---

## Context

Citizens typically reach government services through many separate channels, each with its own forms, sign-in and verification steps. Every new digital service built in isolation repeats the same work: identity checks, payments, document handling and status tracking. myGov was conceived as a unified citizen service platform to bring these services together in one place, built on components that every service could share.

## My Role

As Solutions Architect at a2i, I architected myGov. My work covered the overall platform architecture, the shared components that services are built on, and the integrations with national systems.

## What was built

The platform integrates with key national systems, including **NID**, **BRN**, **NBR**, **Passport** and **ekPay**, among others, so services can verify information and accept payments without each agency building its own connections.

On top of these integrations sit shared, reusable components:

- **Citizen & Government SSO**: single sign-on for citizens and for government officials
- **Digital locker**: a place for citizens' documents
- **Service Builder, Form Builder and Dashboard Builder**: tools for configuring services, forms and reporting rather than custom-coding each one
- **Unified Service Tracker**: a single view of application status across services

## Outcome

myGov shows a whole-of-government approach in practice. Integrations and common capabilities are built once and reused across services, in line with Digital Public Infrastructure (DPI) principles: reusable, interoperable building blocks rather than siloed systems.

<!-- TODO: add measurable outcomes (e.g., number of services onboarded, registered users) if you can share verified figures. -->
