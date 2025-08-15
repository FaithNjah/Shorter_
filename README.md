# 🔗 URL Shortener Service

A simple yet powerful URL shortening service built with **Node.js**, **Express.js**, and **MongoDB**.  
This application allows users to turn long, hard-to-share URLs into short, memorable links — perfect for social media, quick sharing, or creating neat, user-friendly URLs.

---

## 🚀 Features
- **Shorten Long URLs** – Send a long URL and receive a shortened version instantly.
- **Database Storage** – Both original and shortened URLs are stored in MongoDB.
- **Seamless Redirection** – Visiting a shortened link redirects you to the original URL.
- **Minimal API Design** – Easy to integrate into other applications.

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ORM:** Mongoose

---

## 📂 How It Works
1. **POST a URL** – Send a long URL to the API.
2. **Get a Short URL** – The server generates a unique short code and stores it alongside the original URL.
3. **Redirect** – Accessing the short link redirects you to the original URL.

---


