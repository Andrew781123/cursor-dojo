### **Product Requirements Document: Code Editor Challenge Platform (MVP v2)**

#### **1. Introduction & Vision**
This document outlines the requirements for the MVP of a web-based platform for developers to practice and compete in code editing speed and skill. The vision is to create a minimal, modern, and technically-focused "dojo" where users solve granular code editing challenges, moving sequentially from one to the next.

#### **2. Problem Statement**
Developers rely on fast and accurate code editing to be productive. Mastering editor features is crucial, but there are few dedicated platforms to practice these specific skills in a fun and focused environment. This platform provides that environment.

#### **3. Target Audience
*   **Software Developers:** Who want to improve their code editing fluency and speed.
*   **Keyboard-Enthusiast Programmers:** Users of Vim, VS Code, etc., who enjoy optimizing their workflows.

#### **4. High-Level User Flow (MVP)**
1.  User lands on the **Landing Page**.
2.  User navigates to the **Challenge Page**.
3.  The first challenge is presented in the "Before Start" state.
4.  User starts the challenge, entering the "In Progress" state.
5.  User edits the code to match the target.
6.  Upon completion, the challenge enters the "Finished" state, displaying results including time taken and keystrokes.
7.  User clicks "Next Challenge" to proceed to the next sequential challenge.

#### **5. Pages & Core Components**

For a detailed breakdown of the UI and UX for each page, please refer to the `DESIGN.md` file.

**5.1. Landing Page**
*   **Purpose:** A simple, clean page to introduce the app's purpose and direct users to the challenges.

**5.2. Challenge Page**
*   **Purpose:** The core of the application, where users solve editing challenges.

#### **6. Functional Requirements (MVP)**

**6.1. Challenge Engine**
*   **Sequential Navigation:** Challenges are presented in a fixed, sequential order. A "Next Challenge" button loads the subsequent challenge.
*   **Real-time Diffing:** The application will continuously compare the user's code with the target code to detect completion.
*   **Data Storage:** For each completed attempt, the following must be saved to the database, associated with the user ID and challenge ID:
    *   **Time Taken (in milliseconds).**
    *   **Keystrokes:** The total number of keystrokes made during the challenge.
    *   **Full Keystroke History:** Stored as a JSON array of objects, where each object contains the `key` pressed and a `timestamp`. Example: `[{"key": "a", "timestamp": 1672531201000}, {"key": "b", "timestamp": 1672531201250}]`.

**6.2. Anti-Cheating (Simple MVP Implementation)**
*   **Disable Paste:** The application will intercept and prevent `Ctrl+V` / `Cmd+V` and right-click paste events in the editor during the "In Progress" state.
*   **Focus Detection:** If the user navigates away from the browser tab/window during a challenge, the attempt will be **invalidated** and the user will be notified.

**6.3. Challenge Design & Content**
*   **Philosophy:** Challenges should be simple to understand but require non-trivial editing skills. They should focus on efficiency of movement and manipulation, not complex algorithmic thinking.
*   **Initial Content:** The initial set of 3-5 challenges will be created by the development team based on the examples below.
*   **Example MVP Challenges:**
    1.  **Variable Rename:** Rename a variable that appears in multiple places.
    2.  **Function Extraction:** Select a block of code and wrap it in a new function.
    3.  **Parameter Refactor:** Reorder, add, or remove function parameters and update the call sites within the file.
    4.  **Line Manipulation:** Move a specific line of code from the bottom of the file to the top.
    5.  **Multi-Cursor Edit:** Add the same prefix or suffix to multiple lines simultaneously.

#### **7. Post-MVP Enhancements**
*   Public leaderboards per challenge.
*   Keystroke playback and analysis.
*   User-submitted challenges.
*   Head-to-head, real-time competitions.
