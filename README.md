📁 Portfolio Project Setup Guide
👨‍💻 How to Open This Project in VS Code (or Any Editor)

This project is a modern React + TypeScript portfolio website built with Vite and Tailwind CSS.

📥 1. Download or Clone the Project
Option A — Git Clone (Recommended)

Open your terminal (or VS Code terminal) and run:

git clone https://github.com/soplh/My-Portfolio.git
cd My-Portfolio
Option B — Download ZIP
Go to the GitHub repository
Click Code → Download ZIP
Extract the folder
Open the folder in VS Code
📂 2. Open in VS Code

Inside the project folder:

code .

OR:

Open VS Code
Click File → Open Folder
Select the project folder
📦 3. Install Dependencies

Before running the project, install all required packages:

npm install
⚙️ 4. Run the Project (Development Mode)

Start the local development server:

npm run dev

Then open your browser:

http://localhost:5173

(or the port shown in terminal)

🏗️ 5. Build for Production

To generate an optimized production build:

npm run build

To preview the production build locally:

npm run preview
📁 6. Project Structure Overview
public/        → Static files (images, videos like cims.mp4)
src/           → Main application source code
  components/  → Reusable UI components
  data/        → Portfolio content (projects, bio, config)
  types/       → TypeScript types
  App.tsx      → Main app file
  main.tsx     → Entry point
🎬 7. Adding or Editing Project Media
📹 Video Demo (CIMS Project)

Place your video inside:

public/cims.mp4

Then ensure this path is used in your data file:

videoUrl: "/cims.mp4"
🌐 8. Updating Live Project Links

Edit:

src/data/portfolioData.ts

Example:

previewUrl: "https://your-live-link.com"
📬 9. Contact Form Setup (Optional)

To enable email delivery via Web3Forms:

Get free API key from https://web3forms.com
Add it to .env file:
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
🚀 10. Deploying the Portfolio
Vercel (Recommended)
Push project to GitHub
Import repo on https://vercel.com
Framework: Vite
Build command: npm run build
Output folder: dist
Netlify
Upload repo
Build command: npm run build
Publish directory: dist