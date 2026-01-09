# 🚀 QUICKAI2 – AI Tools Subscription Platform
QUICKAI2 is a modern **AI-powered SaaS web application** built with **React.js**, integrated with **Clerk Authentication & Billing**.  
It provides multiple AI utilities like title generation, article writing, image tools, resume review, and more — with **Free & Premium plans**.

## ✨ Features
🔐 Secure authentication using **Clerk**
 💳 Subscription & billing with **Clerk Pricing Table + Stripe**
 🧠 AI-powered tools:
  - Blog Title Generator
  - Article Writing
  - Image Generation
  - Background Removal
  - Object Removal
  - Resume Review
- 📊 User dashboard
- 👥 Community page
- 🎨 Modern UI with reusable components
- ⚡ Fast performance (Vite + React)

## 🛠 Tech Stack
 **Frontend:** React.js (Vite)
 **Authentication:** Clerk
 **Billing & Payments:** Clerk Billing + Stripe
 **Styling:** CSS / Tailwind CSS
 **State & Routing:** React Router
**Deployment Ready:** Vercel / Netlify

## 📁 Project Structure
QUICKAI2/
└── client/
├── node_modules/
├── public/
└── src/
├── assets/
│ └── (images, icons, svgs)
│
├── components/
│ ├── AiTools.jsx
│ ├── CreationItem.jsx
│ ├── Footer.jsx
│ ├── Hero.jsx
│ ├── Navbar.jsx
│ ├── Sidebar.jsx
│ └── Testimonial.jsx
│
├── pages/
│ ├── BlogTitles.jsx
│ ├── Community.jsx
│ ├── Dashboard.jsx
│ ├── GenerateImages.jsx
│ ├── Home.jsx
│ ├── Layout.jsx
│ ├── RemoveBackground.jsx
│ ├── RemoveObject.jsx
│ ├── ReviewResume.jsx
│ ├── WriteArticle.jsx
│ └── Plan.jsx
│
├── App.jsx
├── index.css
└── main.jsx

🧠 Application Flow
Unauthenticated users → redirected to Sign In
Authenticated users → access AI tools
Premium features → locked behind subscription
Billing handled securely via Stripe

🌟 Future Enhancements
Usage limits for free users
Admin dashboard
API-based AI integrations
Webhooks for subscription events
Analytics & user insights

