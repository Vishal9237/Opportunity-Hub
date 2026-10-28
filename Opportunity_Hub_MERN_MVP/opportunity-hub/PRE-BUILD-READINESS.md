# Pre-Build Readiness Checklist

Use this checklist to decide whether the team has enough alignment to start implementation.

## Product
- [ ] PRD and MVP boundaries reviewed.
- [ ] Initial audience and launch catalogue categories agreed.
- [ ] Saved/tracked/reminder behavior defined.
- [ ] Public browsing and registration boundary agreed.
- [ ] Open questions that affect schemas/auth/reminders resolved.

## UX
- [ ] Wireframes for directory, detail/checklist, dashboard, profile, admin form, and report queue approved.
- [ ] Empty, loading, error, expired, and unknown-deadline states covered.
- [ ] Mobile and keyboard navigation reviewed.

## Technical
- [ ] Language and repo structure chosen.
- [ ] Auth/session approach and CSRF plan reviewed.
- [ ] Core database schemas and uniqueness/index rules approved.
- [ ] Reminder idempotency and deadline-change behavior specified.
- [ ] Error format, validation library, test strategy, and logging approach selected.
- [ ] Hosting, database, email, secrets, and backup approach selected.

## Operations and trust
- [ ] Listing curator(s) identified.
- [ ] Source verification and stale listing policy agreed.
- [ ] Privacy, terms, data retention, and account deletion approach drafted.
- [ ] Report triage owner identified.
- [ ] Pilot feedback method defined.

**Start-build recommendation:** begin once all security/schema/reminder decisions are resolved and remaining product questions have explicit defaults.
