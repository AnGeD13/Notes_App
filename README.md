# Notes App

A simple web app for managing notes.

## Info

This is a portfolio project where I plan to impove my skills in frontend (React).

## Tech Stack

- **Frontend**: React, TypeScript, Material UI
- **Architecture**: Feature-Sliced Design [(FSD)](https://feature-sliced.design/)
- **Tools**: ESLint, Prettier, Vite, CSS Modules

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
- **pages**: Pages or large parts of page in nested routing. It currently contains two pages:
  - **home**: page for a list of notes.
  - **note**: page with a form where you will be able to create and edit notes.
- **widgets**: Large self-contained chunks of functionality or UI. It currently contains:
    - **notes-list**: Contains UI and a mocked list of notes for rendening.
    - **note-form**: Contains UI for the title and description fields and drap&drop feature for files (.PNG, .JPG)
- **features**: Reused implementations of entire product features. 
  - **note-card**: a note card for displaying in the list of notes on the home page.
  - **note-files**:
    - **dialog**: dialog window for viewing the selected file.
    - **drap-drop**: feature of for receiving a file from user by dragging and dropping and by clicking.
- **entities**: Business entities that the project works with: note. 
  - **note**: Note entity includes the following fields: id, title, description, createdAt, updatedAt, file.
- **shared**: Reusable functionality, especially when it's detached from the specifics of the project.
  - **utils**:
    - Formatting date in _"DD.MM.YYYY, hh:mm:ss"_ format.
    - Calculating order of file size (B, KB, MB).
  - **config/texts**: contains ru.json and en.json files that are used for app text and future localization.
  - **constants**: contains params for pages.

## Features
1. One component is used for the note creation and edition page. This is achived by mode prop with **create** and **edit** values.
2. Drap and Drop file feature.
3. Custom hook "useFileUpload" is used for dialog and drag&drop features. It contains functions:
    - for working with drap and drop lifecycle;
    - of adding and deleting file;
    - of opening the dialog window.
4. Config text in json format for future localization.

## Screens

The page with the list of notes:
![notes list](/public/screens_for_readme/notes-list.png)

The page of creation note:
![page of creation note](/public/screens_for_readme/notepage-create.png)

The page of editing note:
![page of editing note](/public/screens_for_readme/notepage-edit.png)

The dialog window for viewing selected file:
![dialog window](/public/screens_for_readme/dialog-window.png)
