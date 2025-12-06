# Product Showcase & Enquiry App

A full-stack assignment using **React + Node.js + SQL (SQLite)**.

---

## 🚀 Features

- Product listing with search and category filter  
- Product details page  
- Enquiry form (name, email, phone, message)  
- Enquiry saved in SQL database  
- Admin API to fetch all enquiries  
- Responsive UI with clean CSS  

---

## 🛠 Tech Stack

### Frontend
- React (CRA)
- Axios  
- React Router  

### Backend
- Node.js + Express  
- SQLite (database.sqlite file)

---

## 📦 Installation

### 1. Backend
cd backend
npm install
node index.js


### 2. Frontend
cd frontend
npm install
npm start


---

## 🗄 Database Setup

Run:

sqlite3 database.sqlite < schema.sql
sqlite3 database.sqlite < seed.sql


---

## 🛣 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | List products |
| GET | /api/products/:id | Get product |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
| POST | /api/enquiries | Submit enquiry |
| GET | /api/enquiries | List enquiries |

---

## 📹 Improvements Possible
- Admin login  
- Image upload  
- Server-side pagination  
- Unit tests  
- Email notifications  

