# InterviewGenie – Your AI-Powered Interview Assistant

## 🚀 Project Overview

**InterviewGenie** is an AI-powered mock interview platform designed to help job seekers prepare for interviews through real-time, AI-driven sessions. Users can customize interviews based on their **job role, experience level, and technology stack** while receiving **instant feedback** on their performance.

## ✨ Key Features

✅ **AI Interview Generation** – Customize interviews by specifying roles, difficulty levels, and technologies.
✅ **Voice-Based Interaction** – Conduct lifelike mock interviews using AI voice agents (powered by **Vapi**).
✅ **Instant Feedback** – Get detailed performance insights, including strengths, areas for improvement, and category-based scores.
✅ **Secure Authentication** – Firebase-based authentication to ensure user data security.
✅ **Responsive Design** – Optimized for both desktop and mobile users.

## 🛠️ Tech Stack

### **Frontend:**

- 🟢 **Next.js** – Server-side rendering, API routes, and performance optimizations
- ⚛ **React** – Component-based architecture and state management
- 🎨 **Tailwind CSS** – Utility-first styling for a modern UI
- 🏗 **ShadCN UI** – Elegant and accessible UI components

### **Backend:**

- 🔥 **Firebase Authentication & Firestore** – User authentication and interview history storage

### **AI Integration:**

- 🤖 **Google Gemini** – AI-driven question generation
- 🎤 **Vapi** – AI-powered voice interaction

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AzaanSuhail/InterviewGenie-Your-AI-powered-interview-assistant.git
cd InterviewGenie-Your-AI-powered-interview-assistant
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Add your Firebase **config keys** in `.env.local` file:
  ```ini
  NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
  ```

### 4️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to see the app in action.

## 📅 Roadmap

🔹 Implement AI-driven **resume-based interview questions**
🔹 Add **code execution support** for live coding challenges
🔹 Introduce **AI-generated feedback explanations**

## 👨‍💻 Contributors

- **Azaan Suhail**
- **Digvijay Singh**
- **Prabhat Kumar**

## 💡 Contributing

We welcome contributions! Feel free to **fork** the repository, create a new branch, and submit a pull request.

---
