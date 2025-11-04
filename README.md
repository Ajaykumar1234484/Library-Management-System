# Library Management System - React + Vite

A modern, full-featured library management system built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 19.2.0
- Vite 6.0.0
- Tailwind CSS 4.1.9
- React Router 7.0.0

## Installation

\`\`\`bash
npm install
\`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

The app will open at http://localhost:3000

## Build

\`\`\`bash
npm run build
\`\`\`

## Preview

\`\`\`bash
npm run preview
\`\`\`

## Features

### Admin Dashboard
- Member Management (Add, view, delete members)
- Book Catalog Management (Add, view, delete books)
- System Users Management
- Reports (Statistics and inventory)
- Transaction Management (Issue, return, search books)

### User Dashboard
- View Issued Books
- Search Library Catalog
- Request Books
- Account Information
- Track Book Status

## Login Credentials

**Admin:**
- Username: admin
- Password: admin

**User:**
- Username: user
- Password: user

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/              (Reusable UI components)
│   ├── admin/           (Admin-specific components)
│   ├── LoginPage.jsx
│   ├── AdminDashboard.jsx
│   └── UserDashboard.jsx
├── lib/
│   └── utils.js         (Utility functions)
├── index.css            (Global styles)
├── main.jsx             (Entry point)
└── App.jsx              (Root component)
\`\`\`

## License

MIT
