# Frontend Documentation

## 1. Core Files

### `src/main.jsx`
- Entry point of the React application
- Sets up the root renderer and routing
- Configures the main application structure

### `src/App.jsx`
- Main application component
- Defines the base layout and routing structure
- Acts as the container for all pages and components

### `src/index.css`
- Global styles and CSS variables
- Contains the main styling for the application
- Defines the application's visual theme and design system

## 2. Components (`/components`)

### Reusable UI Components:
1. `Button.jsx`
   - Custom button component
   - Handles different button variants and states

2. `InputField.jsx`
   - Reusable input component
   - Handles form inputs with validation

3. `RatingStars.jsx`
   - Star rating component
   - Used for displaying and collecting ratings

4. `SearchBar.jsx`
   - Search functionality component
   - Handles search queries and filtering

5. `StoreCard.jsx`
   - Card component for displaying store information
   - Shows store details and ratings

6. `Dropdown.jsx`
   - Custom dropdown menu component
   - Handles selection menus

7. `ErrorMessage.jsx`
   - Error display component
   - Shows error messages and alerts

8. `Sidebar.jsx`
   - Navigation sidebar component
   - Provides main navigation for the application

## 3. Pages (`/pages`)

### Public Pages (`/public`)
- Publicly accessible pages
- Landing page and general information

### User Pages (`/user`)
- Pages accessible to logged-in users
- User dashboard and profile management

### Admin Pages (`/admin`)
- Administrative interface
- System management and oversight

### Owner Pages (`/owner`)
- Store owner specific pages
- Store management and analytics

### `NotFound.jsx`
- 404 error page
- Handles undefined routes

## 4. Context (`/context`)

### `AuthContext.jsx`
- Authentication context provider
- Manages user authentication state
- Handles login/logout functionality
- Provides authentication methods to components

## 5. Services (`/services`)

### `authService.js`
- Authentication service layer
- Handles API calls for authentication
- Manages user sessions and tokens
- Provides authentication-related utilities

## 6. Routes (`/routes`)
- Route configuration
- Defines application navigation paths
- Handles protected and public routes

## 7. Assets (`/assets`)
- Static assets directory
- Contains images, icons, and other media files

## Architecture Overview

The frontend follows a modern React application structure with:

1. **Component-Based Architecture**
   - Reusable UI components
   - Separation of concerns
   - Modular design

2. **Authentication System**
   - Context-based authentication
   - Protected routes
   - Role-based access control

3. **Routing System**
   - Page-based routing
   - Protected and public routes
   - Role-specific navigation

4. **Service Layer**
   - API integration
   - Business logic separation
   - Data management

5. **State Management**
   - Context API for global state
   - Component-level state management
   - Authentication state handling



# 1. Open your terminal

# 2. Navigate to the frontend directory
cd frontend

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
