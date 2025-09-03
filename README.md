# Notes App

A simple web app for managing notes.

## Info

This is a portfolio project where I plan to impove my skills in frontend (React).

## Tech Stack

- **Frontend**: React, TypeScript, Material UI
- **Architecture**: Feature-Sliced Design [(FSD)](https://feature-sliced.design/)
- **Tools**: ESLint, Prettier, Vite

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AnGeD13/Notes_App.git
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the app in your browser at `http://localhost:5173/`

## Project Structure (current)
- **app**: Application entry point. It contains global styles and layouts.
- **pages**: Pages or large parts of page in nested routing. It currently contains main page for a list of notes.
- **widgets**: Large self-contained chunks of functionality or UI. It currently contains a block for a list of notes.
    - **notes-list**: Contains UI and a mocked list of notes for rendening.
- **features**: Reused implementations of entire product features. At this moment it contains note card.
- **entities**: Business entities that the project works with: note. 
  - **note**: Note entity includes the following fields: id, title and description.
- **shared**: Reusable functionality, especially when it's detached from the specifics of the project.

## Screens

The page with the list of notes:
![notes list](/public/screens_for_readme/notes-list.png)
