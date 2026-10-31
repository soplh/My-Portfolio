# My Portfolio

A modern, responsive personal portfolio website built with **React, TypeScript, Vite, and Tailwind CSS**.

## Getting Started

**1. Clone the repository**
``
git clone https://github.com/soplh/My-Portfolio.git
cd My-Portfolio
``

**2. Install dependencies**
``
npm install
``

**3. Start the development server**
``
npm run dev
``

Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build for Production

``
npm run build
npm run preview
``

## Project Structure

- `public/` – Images, videos, and static assets.
- `src/components/` – Reusable UI components.
- `src/data/` – Portfolio content and project information.
- `src/` – Main application files.

## Customization

- Update personal information and projects in `src/data/portfolioData.ts`.
- Add images and videos to the `public/` folder.
- Configure the optional Web3Forms contact form using a `.env` file:

``
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
``

## Deployment

Deploy easily using **[Vercel](https://vercel.com/)** or **[Netlify](https://www.netlify.com/)**.

- Build command: `npm run build`
- Output directory: `dist`
