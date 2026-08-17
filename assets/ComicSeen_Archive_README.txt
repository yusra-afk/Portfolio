====================================================================
ComicSeen - Capstone Project Archive
Submitted by: ComicSeenTeam
Course: Capstone (2026 Summer)
Instructor: Dr. Bude Su
Industry Mentor: Justin Greenberg, ComicSeen
Date: August 14, 2026
====================================================================


1. HOW TO ACCESS THE PROJECT
--------------------------------------------------------------------

Live platform:   https://comicseen.com

ComicSeen is a live, production platform used by working comedy
producers and comedians. All four capstone features described below
are deployed and running on the live site and can be reviewed there
directly.


2. WHY SOURCE CODE IS NOT INCLUDED, AND WHAT IS PROVIDED INSTEAD
--------------------------------------------------------------------

The ComicSeen source repository is private and is owned by our
industry mentor, Justin Greenberg, who runs ComicSeen as an active
commercial business. The codebase is his intellectual property and
contains production infrastructure and real user data handling, so it
cannot be redistributed or archived outside his ownership. Our mentor
was consulted directly about this requirement and confirmed the
constraint.

Rather than excerpt fragments of proprietary source, this archive
documents the work through three forms of evidence that can be
verified without access to the repository:

  (a) The deployed product itself. All four features are live at
      comicseen.com and can be exercised by faculty directly. The
      working software is the primary artifact.

  (b) Pull request records for every team member. Each team member
      has a PDF containing screenshots of their pull request
      history, filtered to their own GitHub account. These show what
      each person built and the scope and title of each change. For
      assessing individual contribution and team version-control
      practice, this is more complete evidence than isolated code
      excerpts would be: it covers every change each person made
      across the semester rather than a few hand-picked lines.

  (c) The testing and evaluation report, which documents what was
      tested, what each test asserts, and the results.

If faculty need to see source code directly for accreditation or
program review purposes, we can relay that request to our mentor, who
has been responsive throughout the semester and may be able to
arrange a private review.


3. WHAT THE TEAM BUILT
--------------------------------------------------------------------

ComicSeen is a booking and profile platform for the standup comedy
scene, connecting producers who run shows with comedians who perform
on them. Our capstone work added four features to the existing
platform. All four live in the same React + Spring Boot codebase and
share one authentication layer, user model, and database - they are
integrated parts of one product rather than four separate add-ons.

  Notification System Refactor  - Yusra Ashar
     Replaced a tightly-coupled notification model with an
     event-driven system built on Spring application events. Six
     event types are wired end to end, email is decoupled from the
     web request thread, delivery only occurs after the database
     transaction commits, and every send is gated on the user's
     notification preferences.

  In-App Messaging System  - Sam Numan
     Real-time producer-to-comic messaging over WebSocket/STOMP,
     with backend role enforcement, email alerts for offline
     recipients, and a modernized conversation UI.

  Calendar of Availability  - Shane Ritter
     Comedian availability scheduling by day, location, and notes,
     live on the platform. Also added producer-side filtering of
     comedian availability and a booking request system built on top
     of it: a producer can request to book a comic directly from the
     filtered results, and the comic can approve or decline the
     request. This feature area is complete; some of the functionality
     built for it belongs to a paid subscription tier and will be
     enabled on the live site when our mentor releases that tier.

  EPK Profile  - Vivian Le
	Redesigned the comedian EPK profile and edit experience, including profile details, 		location, social media links, and upcoming shows. Also expanded front-end unit test 		coverage and added automated testing to the deployment workflow.

Integration example: messaging and the show/booking flows all publish
into the same notification pipeline, so a new message, a signup, or a
cancellation all travel one shared path rather than four.


4. TECHNOLOGY STACK
--------------------------------------------------------------------

Front end:      React, React Bootstrap
Back end:       Spring Boot 3.2.4, Java 22
Database:       MySQL (managed instance)
Real-time:      WebSocket over STOMP (react-stomp-hooks)
Email:          Resend API with HTML templates
Geocoding:      HERE API
Infrastructure: Docker, Kubernetes on DigitalOcean
CI/CD:          GitHub Actions, pull-request based workflow


5. CONTENTS OF THIS ARCHIVE
--------------------------------------------------------------------

  readme.txt
      This file.

  ComicSeen_Capstone_Proposal.pdf
      The team capstone proposal, including problem analysis, feature
      specifications, individual contribution plan, AI-assisted
      development evaluation, and the testing plan.

  ComicSeen_Testing_and_Reporting.pdf
      Testing and evaluation report covering the test suite, what each
      test asserts, why it matters, and results.

  pr-yusra-ashar.pdf
  pr-sam-numan.pdf
  pr-shane-ritter.pdf
  pr-vivian-le.pdf
      Pull request records, one PDF per team member. See section 6.


6. PULL REQUEST RECORDS - WHAT EACH FILE SHOWS
--------------------------------------------------------------------

Each PDF contains images of the GitHub pull request list filtered to a
single team member's account, showing that member's contributions to
the ComicSeen repository.

  pr-yusra-ashar.pdf
      Pull requests for the notification system refactor: the
      event-driven migration, the six event types, the async executor
      configuration, bug fixes found during the code audit, and the
      unit test suite.

  pr-sam-numan.pdf
      Pull requests for the in-app messaging system: role enforcement,
      email alert integration, conversation visibility fixes, and UI
      modernization.

  pr-shane-ritter.pdf
      Pull requests for the calendar of availability: the availability
      data model and scheduling UI, and producer-side comedian search
      and filtering.

  pr-vivian-le.pdf
      Pull requests for the EPK profile redesign and edit form, and
      front-end test coverage.

Together with the live platform and the documents listed in section 5,
this archive is intended to contain everything needed to review the
team's work.

====================================================================
