### **Design & UX Brief: Code Editor Challenge Platform**

This document outlines the design and user experience requirements for the Code Editor Challenge Platform MVP. The goal is to create a minimal, modern, and technically-focused interface that is intuitive and enjoyable for developers.

#### **1. Overall Aesthetic**

- **Theme:** Dark-themed UI.
- **Color Palette:** The color scheme should evolve around the green color of Vim (e.g., `#008000` or similar), creating a focused, developer-centric aesthetic. Accent colors should be used sparingly to highlight interactive elements.
- **Typography:** A clean, readable monospace font should be used for all code and technical information. A modern sans-serif font should be used for UI text and instructions.

#### **2. High-Level User Flow**

1.  User lands on the **Landing Page**.
2.  User clicks the "Start Challenge" button to navigate to the **Challenge Page**.
3.  The first challenge is presented in the "Before Start" state with a start overlay.
4.  User clicks the overlay or presses any key, which transitions the challenge to the "In Progress" state and starts the timer.
5.  Upon completion, the UI transitions to the "Finished" state.
6.  User clicks "Next Challenge" to seamlessly move to the next challenge.

#### **3. Page-by-Page Breakdown**

**3.1. Landing Page**

- **Purpose:** A simple, clean page to introduce the app's purpose.
- **Elements:**
  - **Logo/App Name:** Prominently displayed.
  - **Login Button:** For user authentication.
  - **Headline:** "The Code Editor Dojo" (H1).
  - **Tagline:** "A place to practice your code editing skills." (Paragraph).
  - **Call to Action:** A single, prominent "Start Challenge" button.

**3.2. Challenge Page**

- **Layout:** A two-column layout for the split-pane editor. Instructions and controls should be positioned intuitively, likely above or below the editor.
- **Core Elements:**
  - **Header:** Includes Logo, "Challenge" title, and User Avatar.
  - **Challenge Instructions:** Presented as a clear, step-by-step list.
  - **Split-Pane Editor:**
    - **Left Pane (Editable):** The user's active workspace.
    - **Right Pane (Read-only):** The target code state.
  - **Settings:** A simple UI element (e.g., a toggle switch or a small dropdown) to switch between **Vim mode** and **Normal mode**.
  - **Action Buttons:** "Reset", "Skip this challenge", "Next Challenge", "Retry Challenge". Buttons should have clear labels and intuitive states (e.g., a disabled state).

- **Challenge State UIs:**
  1.  **Before Start State:**
      - The editable code pane is covered by a semi-transparent overlay.
      - A clear text prompt is displayed on the overlay: `Click or press any key to start`.
      - This makes the editor visible but not directly interactive.
  2.  **In Progress State:**
      - Triggered by a click on the overlay or the first keystroke.
      - The overlay disappears.
      - The timer starts and is clearly visible (e.g., "Timer: 00:12").
      - The editor becomes fully active.
      - The "Reset" and "Skip this challenge" buttons are active.
  3.  **Finished State:**
      - The editor becomes inactive and dimmed.
      - The timer is stopped.
      - A summary/modal is displayed with the following information:
        - **Challenge Cleared!** message.
        - **Time Taken** (e.g., "Time: 00:45").
        - **Keystrokes** (e.g., "Keystrokes: 87").
      - **Call to Actions:** "Next Challenge" (primary) and "Retry Challenge" buttons.
