
import { createRoot } from 'react-dom/client'
import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = "pk_test_YWN0dWFsLW1heWZseS05OC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </ClerkProvider>
  </React.StrictMode>
);
