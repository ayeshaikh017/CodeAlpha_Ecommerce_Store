# CodeAlpha_Ecommerce_Store
This is a full-stack e-commerce web application that allows users to browse products, add them to a shopping cart, and place orders. The application includes user authentication, product management, and a complete checkout process. Type: Full-Stack Web Application Purpose: Online Shopping Platform Architecture: Client-Server Model.
# 🛒 E-Commerce Store - Full Stack Application

![Project Banner](https://img.shields.io/badge/CodeAlpha-Internship%20Task%201-blue)
![Stack](https://img.shields.io/badge/Stack-MERN-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📌 Project Overview

A fully functional e-commerce web application built as part of **CodeAlpha Full Stack Development Internship - Task 1**. This project demonstrates end-to-end development skills including frontend design, backend API development, database management, and user authentication.

## 🚀 Live Demo

[Click here to view demo](#) <!-- Add your deployed link if available -->

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

## 📸 Screenshots

<!-- Add screenshots of your application -->
![Homepage](screenshots/home.png)
![Product Details](screenshots/product.png)
![Shopping Cart](screenshots/cart.png)
![Login](screenshots/login.png)

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

**Your Name**
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🏆 Internship Details

**Company**: CodeAlpha  
**Program**: Full Stack Development Internship  
**Task**: Task 1 - Simple E-commerce Store  
**Duration**: [Your Duration]  
**Status**: ✅ Completed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- CodeAlpha team for the internship opportunity
- Mentors for guidance and support
- Open-source community for amazing tools

---

⭐ If you found this project helpful, please give it a star!

**#CodeAlpha #FullStackDevelopment #MERN #Internship**
```

---

## 🔷 **PART 2: LINKEDIN POST & VIDEO SCRIPT**

### **LinkedIn Post Template**
```
🚀 Project Completed: Full Stack E-Commerce Application 🛒

I'm excited to share my latest project built during my Full Stack Development Internship at @CodeAlpha! 

🎯 Project: E-Commerce Store (Task 1)
💻 Tech Stack: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB

✨ Key Features Implemented:
✅ Product Listings with Dynamic Data Loading
✅ Shopping Cart with LocalStorage Persistence
✅ Product Details Page
✅ Complete Order Processing System
✅ Secure User Registration & Login (JWT + bcrypt)
✅ Admin Panel for Product Management
✅ Image Upload System (Multer)
✅ Responsive Design (Mobile-First)

🔐 Security Features:
- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- CORS configuration

📚 What I Learned:
- Building RESTful APIs from scratch
- Database design and relationships
- Authentication & Authorization
- Frontend-Backend integration
- Asynchronous JavaScript
- Security best practices

🛠️ Technical Highlights:
- 16 products with real-time cart updates
- Modular code structure (MVC pattern)
- Error handling & validation
- Clean, maintainable code
- Professional UI/UX design

This project strengthened my understanding of full-stack development and gave me hands-on experience with industry-standard tools and practices.

🔗 GitHub Repository: [Your GitHub Link]
📹 Watch the full demo in the video!

Special thanks to @CodeAlpha for this incredible learning opportunity! 🙏

#CodeAlpha #FullStackDevelopment #MERN #WebDevelopment #JavaScript #NodeJS #MongoDB #ExpressJS #Internship #TechInternship #WebDesign #Coding #Programming #DeveloperLife #TechSkills #Portfolio

---

What features would you add to an e-commerce platform? Drop your suggestions in the comments! 💬
```

---

### **📹 VIDEO RECORDING SCRIPT (5-7 minutes)**

**Here's exactly what to show and say in your screen recording:**

---

#### **INTRO (30 seconds)**

**[Show: Your face or screen with project title]**

> "Hello everyone! I'm [Your Name], and today I'm excited to present my Full Stack E-Commerce Application that I built as part of my CodeAlpha internship. This is Task 1, and I'll walk you through all the features, the technology stack, and the complete functionality of this project. Let's dive in!"

---

#### **SECTION 1: PROJECT OVERVIEW (1 minute)**

**[Show: Homepage with products]**

> "This is a fully functional e-commerce website where users can browse products, add items to their cart, register accounts, and place orders. 
>
> The tech stack includes:
> - Frontend: HTML, CSS, and vanilla JavaScript
> - Backend: Node.js with Express.js framework
> - Database: MongoDB for storing products, users, and orders
> - Security: JWT authentication and bcrypt password hashing
>
> Let me show you the main features."

---

#### **SECTION 2: BROWSING PRODUCTS (45 seconds)**

**[Show: Scroll through products on homepage]**

> "Here on the homepage, we have 16 different products including electronics, gadgets, and accessories. Each product card shows:
> - Product image loaded from Amazon CDN for fast loading
> - Product name and description
> - Price in Indian Rupees
> - An 'Add to Cart' button
>
> All this data is dynamically loaded from our MongoDB database through REST API calls. Let me click on a product to see more details."

---

#### **SECTION 3: PRODUCT DETAILS PAGE (30 seconds)**

**[Show: Click on a product, show details page]**

> "This is the product details page where users can see:
> - A larger product image
> - Complete product description
> - Price
> - And an 'Add to Cart' button
>
> The product ID is passed through the URL, and we fetch the specific product data from the backend API. Let me add this to the cart."

---

#### **SECTION 4: SHOPPING CART (1 minute)**

**[Show: Add items to cart, navigate to cart page]**

> "I've added a few items to the cart. Now let me navigate to the cart page.
>
> **[Click 'Add to Cart', show alert]**
>
> Notice the 'Added to cart!' confirmation message. The cart data is stored in browser localStorage for persistence.
>
> **[Navigate to cart.html]**
>
> Here's our shopping cart showing:
> - All items I've added
> - Each item's image, name, and price
> - A remove button for each item
> - Total price calculation at the bottom
>
> **[Click remove on an item]**
>
> I can remove items instantly. The cart is updated in real-time and the total recalculates automatically.
>
> Now, if I want to place an order, I need to be logged in first. Let me show you the authentication system."

---

#### **SECTION 5: USER REGISTRATION (45 seconds)**

**[Show: Navigate to Register page]**

> "This is the registration page. Let me create a new account.
>
> **[Fill the form]**
>
> I'll enter:
> - Full name
> - Email address
> - Password (minimum 6 characters for validation)
>
> **[Click Register]**
>
> When I click register, the data is sent to our backend where:
> 1. The password is hashed using bcryptjs for security
> 2. The user is saved to MongoDB
> 3. We get a success message
>
> Now I'm redirected to the login page."

---

#### **SECTION 6: USER LOGIN (45 seconds)**

**[Show: Login page]**

> "On the login page, I'll enter my credentials.
>
> **[Fill login form]**
>
> When I click login, the backend:
> 1. Verifies the email and password
> 2. Compares the hashed password using bcrypt
> 3. Generates a JWT token
> 4. Sends the token back to the frontend
>
> **[Click Login, show success]**
>
> Success! The JWT token is now stored in localStorage, and I'm logged in. Notice the navigation bar now shows 'Logout' with my name."

---

#### **SECTION 7: PLACING AN ORDER (45 seconds)**

**[Show: Go back to cart, place order]**

> "Now that I'm logged in, let me go back to the cart and place an order.
>
> **[Navigate to cart]**
>
> I have my items here. Let me click 'Place Order'.
>
> **[Click Place Order]**
>
> The system:
> 1. Verifies my JWT token for authentication
> 2. Creates an order document in MongoDB with:
>    - User ID
>    - List of products
>    - Total amount
>    - Timestamp
> 3. Clears the cart
> 4. Shows confirmation
>
> **[Show success message, cart cleared]**
>
> Perfect! Order placed successfully, and the cart is now empty."

---

#### **SECTION 8: ADMIN PANEL (BONUS) (45 seconds)**

**[Show: Navigate to admin.html]**

> "As a bonus feature, I've also built an admin panel where authorized users can add new products.
>
> **[Fill the form]**
>
> I can enter:
> - Product name
> - Price
> - Description
> - Upload an image file OR provide an image URL
>
> **[Upload/enter image]**
>
> The image gets uploaded to our server using Multer middleware.
>
> **[Click Add Product]**
>
> The product is saved to the database and immediately appears on the homepage. This demonstrates full CRUD functionality."

---

#### **SECTION 9: CODE WALKTHROUGH (1 minute)**

**[Show: VS Code with project structure]**

> "Let me quickly show you the code structure.
>
> **[Show backend folder]**
>
> In the backend, we have:
> - Config folder with MongoDB connection
> - Models for User, Product, and Order schemas
> - Routes for handling API endpoints
> - Middleware for JWT authentication
> - Server.js as the main entry point
>
> **[Show frontend folder]**
>
> The frontend has:
> - HTML pages for each view
> - CSS for responsive styling
> - JavaScript files handling:
>   - Product fetching and display
>   - Authentication logic
>   - Shopping cart operations
>
> **[Show server.js briefly]**
>
> Here's the Express server where we:
> - Connect to MongoDB
> - Set up CORS
> - Define API routes
> - Start the server on port 5000
>
> **[Show a route file, e.g., userRoutes.js]**
>
> Here's an example route for user registration showing:
> - Password hashing with bcrypt
> - User creation in MongoDB
> - Error handling
>
> **[Show frontend JavaScript, e.g., main.js]**
>
> And here's the frontend JavaScript making API calls using fetch with async/await."

---

#### **SECTION 10: DATABASE (30 seconds)**

**[Show: MongoDB Compass or terminal with database]**

> "Let me quickly show the database.
>
> **[Show collections]**
>
> We have three collections:
> - Products: Storing all our product data
> - Users: Storing registered users with hashed passwords
> - Orders: Storing all placed orders
>
> **[Show a document]**
>
> Here's an example product document with name, price, description, and image URL."

---

#### **SECTION 11: TECHNICAL HIGHLIGHTS (45 seconds)**

**[Show: Browser DevTools Console/Network tab]**

> "Some technical highlights:
>
> **[Open DevTools, show Network tab]**
>
> - All API calls are RESTful
> - We use GET for fetching data
> - POST for creating users, orders, and products
>
> **[Show Console]**
>
> - Clean error handling and logging
> - Proper HTTP status codes
>
> **[Show Application tab, localStorage]**
>
> - JWT token and user data stored securely in localStorage
> - Cart data persists even after browser refresh
>
> **[Show responsive design]**
>
> - Fully responsive - works on mobile, tablet, and desktop"

---

#### **CLOSING (30 seconds)**

**[Show: Your face or homepage]**

> "So that's my Full Stack E-Commerce application! 
>
> To summarize, I've successfully implemented:
> ✅ Product listings and details
> ✅ Shopping cart functionality
> ✅ User registration and login with JWT
> ✅ Order processing system
> ✅ Admin panel for product management
> ✅ Secure authentication
> ✅ Responsive design
>
> This project has been an amazing learning experience, and I want to thank CodeAlpha for this opportunity.
>
> The complete source code is available on my GitHub. Link is in the description and the LinkedIn post.
>
> If you have any questions or suggestions, feel free to comment. Thanks for watching!"

---

### **🎬 VIDEO RECORDING TIPS**

1. **Resolution**: 1080p (1920x1080)
2. **Length**: 5-7 minutes
3. **Tool**: OBS Studio, Loom, or built-in screen recorder
4. **Audio**: Clear microphone, no background noise
5. **Pace**: Speak clearly, not too fast
6. **Editing**: Cut long pauses, add transitions

---

### **📤 SUBMISSION CHECKLIST**

Before submitting, ensure:

- ✅ GitHub repo created: `CodeAlpha_Ecommerce_Store`
- ✅ README.md added with all details
- ✅ Code pushed to GitHub
- ✅ LinkedIn post written (tag @CodeAlpha)
- ✅ Video recorded (5-7 mins)
- ✅ Video uploaded to LinkedIn
- ✅ GitHub link added to LinkedIn post
- ✅ Submission form filled

---

## 🎯 **FINAL LINKEDIN POST (Shortened Version)**

If the above is too long, here's a concise version:
```
🚀 Full Stack E-Commerce Project Completed! 🛒

Excited to share my e-commerce application built during my @CodeAlpha internship!

💻 Tech Stack:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Auth: JWT + bcrypt

✨ Features:
✅ Product listings & cart
✅ User authentication
✅ Order processing
✅ Admin panel
✅ Image upload
✅ Responsive design

🔗 GitHub: [Link]
📹 Full demo in video!

#CodeAlpha #FullStack #WebDev #Internship #MERN

Thanks @CodeAlpha for this opportunity! 🙏
