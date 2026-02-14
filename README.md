# CodeAlpha_Ecommerce_Store
This is a full-stack e-commerce web application that allows users to browse products, add them to a shopping cart, and place orders. The application includes user authentication, product management, and a complete checkout process. Type: Full-Stack Web Application Purpose: Online Shopping Platform Architecture: Client-Server Model.
# 🛒 E-Commerce Store - Full Stack Application

![Project Banner](https://img.shields.io/badge/CodeAlpha-Internship%20Task%201-blue)
![Stack](https://img.shields.io/badge/Stack-MERN-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📌 Project Overview

A fully functional e-commerce web application built as part of **CodeAlpha Full Stack Development Internship - Task 1**. This project demonstrates end-to-end development skills including frontend design, backend API development, database management, and user authentication.


## ✨ Features

### Core Features (As Per Task Requirements)
- ✅ **Product Listings** - Browse all available products with images, prices, and descriptions
- ✅ **Shopping Cart** - Add/remove items, view cart, calculate total
- ✅ **Product Details Page** - Individual product view with full information
- ✅ **Order Processing** - Complete checkout process with order creation
- ✅ **User Registration** - Create new account with secure password hashing
- ✅ **User Login** - JWT-based authentication system

### Additional Features (Bonus)
- 🎨 Responsive Design - Mobile, tablet, and desktop friendly
- 🔐 Secure Authentication - JWT tokens + bcrypt password hashing
- 📦 Admin Panel - Add new products with image upload
- 🖼️ Image Upload System - Multer integration for product images
- 💾 Persistent Cart - localStorage implementation
- 🎯 Clean UI/UX - Modern, professional interface

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with Grid, Flexbox, responsive design
- **JavaScript (ES6+)** - DOM manipulation, fetch API, async/await

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Security & Authentication
- **bcryptjs** - Password hashing
- **jsonwebtoken (JWT)** - Secure token-based authentication
- **CORS** - Cross-origin resource sharing

### Additional Tools
- **Multer** - File upload handling
- **Body-Parser** - Request parsing middleware
- **Nodemon** - Development auto-restart

## 📂 Project Structure
```
ecommerce-project/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema
│   │   └── Order.js              # Order schema
│   ├── routes/
│   │   ├── userRoutes.js         # Auth endpoints
│   │   ├── productRoutes.js      # Product CRUD
│   │   ├── orderRoutes.js        # Order processing
│   │   └── uploadRoutes.js       # Image upload
│   ├── server.js                 # Main server file
│   ├── insertProducts.js         # Database seeder
│   └── package.json              # Dependencies
│
└── frontend/
    ├── css/
    │   └── style.css             # All styles
    ├── js/
    │   ├── main.js               # Product listing
    │   ├── auth.js               # Authentication
    │   └── cart.js               # Shopping cart
    ├── images/                   # Product images
    ├── index.html                # Homepage
    ├── login.html                # Login page
    ├── register.html             # Registration
    ├── cart.html                 # Shopping cart
    ├── product.html              # Product details
    └── admin.html                # Admin panel
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Step 1: Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/CodeAlpha_Ecommerce_Store.git
cd CodeAlpha_Ecommerce_Store
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Configure MongoDB
Ensure MongoDB is running on your system:
```bash
mongod
```

### Step 4: Seed Database with Products
```bash
cd backend
node insertProducts.js
```

### Step 5: Start Backend Server
```bash
node server.js
```
Server will run on `http://localhost:5000`

### Step 6: Open Frontend
Simply open `frontend/index.html` in your browser or use a local server:
```bash
cd frontend
npx serve
```

## 📡 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)

### Orders
- `POST /api/orders` - Create new order

### Upload
- `POST /api/upload` - Upload product image

## 🔐 Security Features

1. **Password Hashing** - bcryptjs with salt rounds
2. **JWT Authentication** - Secure token-based auth
3. **CORS Protection** - Configured cross-origin policies
4. **Input Validation** - Server-side validation
5. **Protected Routes** - Middleware authentication

## 💾 Database Schema

### User Schema
```javascript
{
  name: String,
  email: String,
  password: String (hashed)
}
```

### Product Schema
```javascript
{
  name: String,
  price: Number,
  description: String,
  image: String
}
```

### Order Schema
```javascript
{
  userId: String,
  products: Array,
  total: Number,
  date: Date
}
```


## 🎯 Learning Outcomes

Through this project, I gained hands-on experience with:
- ✅ Full-stack web development
- ✅ RESTful API design and implementation
- ✅ Database modeling and management
- ✅ User authentication and authorization
- ✅ Frontend-backend integration
- ✅ Asynchronous JavaScript
- ✅ Security best practices
- ✅ Project structure and organization

## 🚀 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Email notifications
- [ ] Order history page
- [ ] Product search and filters
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard with analytics
- [ ] Real-time order tracking

## 👨‍💻 Author

**Ayesha Shaikh**
- LinkedIn:(https://www.linkedin.com/in/ayeshaikh0017/)
- GitHub: (https://github.com/ayeshaikh017/)

## 🏆 Internship Details

**Company**: CodeAlpha  
**Program**: Full Stack Development Internship  
**Task**: Task 1 - Simple E-commerce Store  
**Duration**: [1 Month]  
**Status**: ✅ Completed



## 🙏 Acknowledgments

- CodeAlpha team for the internship opportunity
- Mentors for guidance and support
- Open-source community for amazing tools

---

⭐ If you found this project helpful, please give it a star!

**#CodeAlpha #FullStackDevelopment #MERN #Internship**
```

---

