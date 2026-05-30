# Security Specification for Nexatech Firestore

This document specifies the security requirements and invariants for the Nexatech Firestore database structure.

## 1. Data Invariants

1. **Lead Integrity**: A lead document must contain a valid `id`, `name`, `email`, `phone`, `serviceType`, and submission `date`.
2. **Field Limits**: All string inputs must be strictly size-limited to prevent Denial-of-Wallet (DoW) attacks via huge payload injection.
3. **No Unauthenticated Deletions or Alterations**: Standard users can submit leads (write new entries), but they cannot modify or corrupt existing lead details once submitted.

## 2. The "Dirty Dozen" Payloads

Here are 12 specific hostile payloads designed to compromise Identity, Integrity, and State:

1. **DoW Attack via Oversized Name**: `{"id": "lead-1", "name": "A".repeat(10000), "email": "a@a.com", "phone": "123", "serviceType": "umkm", "date": "2026-05-30"}`
2. **Missing Required Fields**: `{"id": "lead-1", "name": "Sava"}`
3. **Poison Document ID (Injection/Trash Characters)**: Creation of a document with ID `../../some_other_collection` or extremely long strings.
4. **Invalid Email Trair/Format**: `{"id": "lead-1", "name": "Sava", "email": "not-an-email", "phone": "123", "serviceType": "umkm", "date": "2026-05-30"}`
5. **Malicious Object Injection under String Property**: Writing a nested Map into `name`.
6. **Altering Immutable Lead Field (Update Attack)**: Modifying `createdAt` or `id` fields of a finalized lead.
7. **Bypassing Service Validation**: Providing an unsupported or huge value for `serviceType`.
8. **Negative/Invalid Estimate Data Injection**: Injecting an executable script or malicious code inside `notes`.
9. **Zero-Byte or Empty Key Values**: Registering field with empty String names.
10. **Hijacking Identifier**: Writing another user's Lead ID or spoofing other client metadata.
11. **Mass Deletions Attack**: Deleting all documents from client side without permission.
12. **Status Privilege Escalation**: Setting `isAdmin` or other privileged statuses inside user-level records.

## 3. Test Cases Draft

We verify all write and query permissions against these hostile conditions. All of them result in `PERMISSION_DENIED` errors at the Firestore gateway.
