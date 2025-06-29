### Epic: Foundation & Setup
- [ ] **Ticket: Database Schema Setup**
  - Description: Define and set up the database schema using Drizzle ORM for `users`, `challenges`, `challenge_attempts`, and `keystroke_history`. Refer to `prd.md` for data storage requirements.
- [ ] **Ticket: Implement User Authentication**
  - Description: Set up basic user authentication. The landing page has a `Login` button, and the challenge page shows a `User Avatar`.
- [ ] **Ticket: Core UI & Theming**
  - Description: Implement the base dark theme, typography, and color palette as defined in `design.md`. Create reusable styled components for buttons and basic layout elements.

### Epic: Landing Page
- [ ] **Ticket: Build Static Landing Page**
  - Description: Create the landing page UI with the headline, tagline, and "Start Challenge" button as specified in the `wireframes.md`.
- [ ] **Ticket: Implement Navigation**
  - Description: The "Start Challenge" button should navigate the user to the `/challenge` page. The Login button should trigger the authentication flow.

### Epic: Challenge Page - UI & Layout
- [ ] **Ticket: Implement Split-Pane Editor Layout**
  - Description: Build the core two-column layout for the challenge page, with an editable left pane and a read-only right pane.
- [ ] **Ticket: Display Challenge Instructions**
  - Description: Create the component to display the current challenge's instructions clearly to the user.
- [ ] **Ticket: Build Page Header**
  - Description: Implement the header containing the logo, challenge title, and user avatar area.
- [ ] **Ticket: Implement Editor Mode Toggle**
  - Description: Add a UI control (e.g., switch or dropdown) to allow the user to toggle between "Vim mode" and "Normal mode" for the editor.
- [ ] **Ticket: Implement Action Buttons**
  - Description: Create the `Reset`, `Skip`, `Next Challenge`, and `Retry` buttons. Ensure their states (enabled/disabled) change correctly based on the challenge state.

### Epic: Challenge Engine - State & Flow
- [ ] **Ticket: Implement "Before Start" State**
  - Description: The challenge page should initially load with a semi-transparent overlay on the editor, prompting the user to `Click or press any key to start`.
- [ ] **Ticket: Implement "In Progress" State**
  - Description: On user interaction, remove the overlay, make the editor active, and start the timer.
- [ ] **Ticket: Implement Timer Logic**
  - Description: The timer should start, display the elapsed time in `MM:SS` format, and stop when the challenge is completed.
- [ ] **Ticket: Implement "Finished" State**
  - Description: When the challenge is complete, the editor should become inactive, and a summary modal should appear displaying the "Challenge Cleared!" message, time taken, and keystroke count.
- [ ] **Ticket: Implement Sequential Challenge Loading**
  - Description: The "Next Challenge" button should fetch and display the next challenge in the sequence.

### Epic: Challenge Engine - Core Logic
- [ ] **Ticket: Implement Real-time Diffing**
  - Description: Continuously compare the user's code in the editable pane against the target code in the read-only pane to automatically detect when the challenge is successfully completed.
- [ ] **Ticket: Seed Initial Challenges**
  - Description: Create and load the initial 3-5 MVP challenges into the database as described in `prd.md` (e.g., variable rename, function extraction).

### Epic: Data & Analytics
- [ ] **Ticket: Track Keystrokes**
  - Description: During the "In Progress" state, capture every keystroke and its timestamp.
- [ ] **Ticket: Save Challenge Attempt Data**
  - Description: Upon completion, save the `Time Taken`, total `Keystrokes`, and the full `Keystroke History` (JSON array) to the database, associated with the user and challenge.

### Epic: Anti-Cheating (MVP)
- [ ] **Ticket: Disable Paste in Editor**
  - Description: Intercept and prevent `Ctrl+V` / `Cmd+V` and right-click paste events within the editor pane while a challenge is in progress.
- [ ] **Ticket: Invalidate Attempt on Focus Loss**
  - Description: If the browser tab/window loses focus during a challenge, invalidate the current attempt and notify the user.
