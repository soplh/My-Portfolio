1. Open the project in VS Code
Open VS Code
Click File → Open Folder
Select your portfolio project folder (e.g. my-portfolio)
2. Open Terminal in VS Code
Press:
Ctrl + ` (backtick)
or go to Terminal → New Terminal
3. Install dependencies

Run this command:

npm install

This downloads all required packages.

4. Start the development server
npm run dev

Then open the link shown in terminal, usually:

http://localhost:5173
5. Add environment file (important for contact form)

Create a file in the root folder:

.env

Add:

VITE_WEB3FORMS_ACCESS_KEY=your_key_here
6. Put your video (CIMS)
Go to:
public/
Add your file:
cims.mp4

Then it will work automatically in the project.

7. Build for production (optional)
npm run build

To test build:

npm run preview