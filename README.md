# My Task Manager

A simple task manager app built with **React**, **Vite**, and **Zustand** for state management. This app allows you to create, edit, delete, and manage tasks with different statuses like **To Do**, **In Progress**, and **Completed**.

---

## Features

- Add new tasks with title, description, category, priority, due date, and time.
- Edit and delete tasks.
- Move tasks between **To Do**, **In Progress**, and **Completed** columns.
- Tasks are saved in **local storage** using **Zustand persist**, so your data stays even after page reload.
- Responsive layout for desktop and mobile screens.
- Simple and clean UI with **Tailwind CSS**.

---

## Tech Stack

- **Frontend:** React, Vite
- **State Management:** Zustand (with persistence)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/my-task-manager.git
cd my-task-manager
npm install
npm run dev

Project Structure
my-task-manager/
├─ public/             # Static assets
├─ src/
│  ├─ components/      # React components (TaskCard, Modal, Buttons, etc.)
│  ├─ store/           # Zustand store
│  ├─ App.jsx          # Main app component
│  └─ main.jsx         # Entry point
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```
