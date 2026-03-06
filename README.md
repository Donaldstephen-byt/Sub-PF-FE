# 3D Portfolio Website

> **Built with ❤️ by [Donald Stephen](https://github.com/Donaldstephen-byt)**

A modern, high-performance 3D portfolio website built with **React 19**, **Vite**, and **React Three Fiber**. This project features immersive 3D elements, smooth page transitions, and a fully responsive design.

## 🚀 Features

- **Immersive 3D Graphics**: Leveraging [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) and [Drei](https://github.com/pmndrs/drei) for high-quality 3D renderings and interactions.
- **Dynamic Page Transitions**: Smooth navigation using [Framer Motion](https://www.framer.com/motion/) and [React Router](https://reactrouter.com/).
- **Responsive Design**: Mobile-first approach using [Tailwind CSS 4](https://tailwindcss.com/).
- **Performance Optimized**: Built with Vite for lightning-fast development and optimized production builds.
- **Interactive UI Components**: Custom-built components like `SkillsGrid`, `ProjectCard`, and interactive 3D avatars.
- **System Analytics**: Integrated tracking for page views and user engagement.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **3D Rendering**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React, Phosphor Icons, Heroicons
- **Routing**: React Router Dom 7
- **Deployment**: Vercel

## 📁 Project Structure & Modules

### 🗺️ Pages (`src/assets/pages/`)

The main views of the application, managed via `react-router-dom`:

- **Home**: Landing page with immersive 3D elements.
- **About**: Developer bio, skills, and engineering philosophy.
- **Projects**: Portfolio showcase with detailed project descriptions.
- **Contact**: Interactive contact form and social reach links.
- **Construction**: Dedicated scene for sections under development.

### 🏗️ Components (`src/components/`)

Reusable UI and 3D modules:

- **Navigation**: `Navbar`, `Footer`, `NavDropdown`.
- **3D/Interactive**: `Avater` (R3F), `SkillsGrid`, `CreativityBar`.
- **UI & Feedback**: `ProjectCard`, `ContactToast`, `SystemStatus`, `CoffeeButton`.
- **Common**: `PageTransition`, `SectionDivider`, `Statchip`.

### ⚙️ Core Logic

- **`App.tsx`**: Central routing and analytics tracking.
- **`config.ts`**: API and environment-specific configuration.
- **`main.tsx`**: Application entry point.

## ⚙️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (Recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add relevant variables (e.g., `VITE_BASE_URL`).

### Running Locally

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

```bash
pnpm build
```

The production-ready files will be in the `dist/` directory.

## 📄 License

This project is private. All rights reserved.

```

```
