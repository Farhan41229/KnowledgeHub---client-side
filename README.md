# KnowledgeHub - Knowledge Sharing Platform

A full-stack knowledge sharing platform built with React and Node.js, featuring user authentication, article management, and a modern responsive design.

## 🌐 Live Project Links

- **Client Application**: [https://knowledgehub-2290.web.app/](https://knowledgehub-2290.web.app/)
- **Server API**: [https://knowledge-hub-server-gules.vercel.app/](https://knowledge-hub-server-gules.vercel.app/)

## 📖 Project Overview

KnowledgeHub is a comprehensive platform where users can share knowledge through articles across various categories including Technology, Education, Health & Wellness, Science, Business, Entertainment, and Sports. The platform features user authentication, article creation and management, category-based filtering, and a modern responsive interface.

### Core Featusadawsdres

- 🔐 **User Authentication**: Secure login/registration using Firebase Authentication
- ✍️ **Article Management**: Create, read, update, and delete articles
- 🏷️ **Category System**: Organize articles by topics with dynamic filtering
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS and DaisyUI
- 🔍 **Search & Filter**: Browse articles by category or view all articles
- 👤 **User Dashboard**: Manage personal articles and profile
- 🎨 **Modern UI**: Beautiful animations, hover effects, and intuitive navigation

## 🛠️ Technologies Used

### Frontend (Client)
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind
- **Firebase Authentication** - User authentication service
- **React Icons** - Icon library
- **Swiper** - Touch slider component
- **React Responsive Carousel** - Banner carousel
- **SweetAlert2** - Beautiful alert dialogs

### Backend (Server)
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **MongoDB Atlas** - Cloud database service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Firebase Hosting** - Client application hosting
- **Vercel** - Server deployment platform

## 📦 Dependencies

### Client Dependencies
```json
{
  "@tailwindcss/vite": "^4.1.10",
  "daisyui": "^5.0.43",
  "firebase": "^11.9.1",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-responsive-carousel": "^3.2.23",
  "react-router": "^7.6.2",
  "sweetalert2": "^11.22.0",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.10"
}
```

### Server Dependencies
```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "mongodb": "^6.17.0"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for database)
- Firebase project (for authentication)

### Client Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd KnowledgeHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

### Server Setup

1. **Navigate to server directory**
   ```bash
   cd KnowledgeHub-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the server directory:
   ```env
   DB_USER=your_mongodb_username
   DB_PASSWORD=your_mongodb_password
   port=3000
   ```

4. **Run the server**
   ```bash
   node index.js
   ```

## 🏗️ Project Structure

```
KnowledgeHub/
├── src/
│   ├── Auths/           # Authentication context and provider
│   ├── components/      # Reusable UI components
│   ├── firebase/        # Firebase configuration
│   ├── layouts/         # Page layouts
│   ├── pages/           # Application pages
│   ├── routes/          # Routing configuration
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts

KnowledgeHub-server/
├── index.js             # Server entry point
├── package.json         # Server dependencies
└── vercel.json          # Deployment configuration
```

## 🔧 Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `node index.js` - Start the server

## 🌟 Key Features Implementation

### Authentication System
- Firebase Authentication integration
- Protected routes with PrivateRoute component
- User context management with React Context API
- Automatic user data synchronization with MongoDB

### Article Management
- CRUD operations for articles
- Category-based filtering
- Rich text content support
- Image thumbnail support
- Tag system for better organization

### Responsive Design
- Mobile-first approach
- Tailwind CSS utility classes
- DaisyUI component library
- Smooth animations and transitions
- Cross-browser compatibility

## 🔌 API Endpoints

- `POST /users` - User registration
- `GET /users` - Get all users
- `GET /users/:email` - Get user by email
- `GET /categories` - Get all categories
- `GET /articles` - Get all articles
- `GET /articles/:id` - Get article by ID
- `POST /articles` - Create new article
- `DELETE /articles/:id` - Delete article

## 🚀 Deployment

### Client Deployment (Firebase)
1. Build the project: `npm run build`
2. Deploy to Firebase Hosting
3. Configure custom domain if needed

### Server Deployment (Vercel)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch


