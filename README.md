📌 URL Shortener Service

A simple yet powerful URL shortening service built with Node.js, Express.js, and MongoDB. This application allows users to convert long, cumbersome URLs into short, shareable links — perfect for social media, quick sharing, or creating memorable URLs.

🚀 Features

Shorten Long URLs – Send a long URL via a request and receive a shortened version.

Database Storage – Store both original and shortened URLs in MongoDB for quick retrieval.

Seamless Redirection – A catch-all route redirects any shortened URL to its original destination.

User-Friendly – Clean and minimal API design for easy integration.

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Additional: Mongoose for database modeling

📂 How It Works

A user sends a POST request with a long URL.

The service generates a unique short code and stores it alongside the original URL in MongoDB.

When a user visits the shortened link, the app finds the original URL in the database and redirects them instantly.
