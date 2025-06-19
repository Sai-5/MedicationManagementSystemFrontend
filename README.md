# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 💊 Medication Management System

A full-stack web app to help patients and caretakers manage medication schedules, built with **React**, **Node.js**, and **SQLite**.

## 🚀 Features

- User Signup/Login (with role: patient or caretaker)
- Role-based dashboards (Phase 1 includes Patient Dashboard)
- Add/view/track medications
- Mark medication as taken
- Adherence tracking (basic)
- SQLite data persistence
- Form validation & error handling
- Frontend state management with **React Query**

## 🛠 Tech Stack

- Frontend: React, React Router, React Query, CSS
- Backend: Node.js, Express
- Database: SQLite (via sqlite3)
- Testing: Vitest, Testing Library

## 🧑‍💻 Setup Instructions

### 1. Backend

```bash
cd backend
npm install
node server.js
