---

## 🌐 **StoreSavvy Architecture Flow (End-to-End)**

---

### 1. **System Entry & Access Flow**

#### 🚪 Entry Points:
- **Public Home Page**
  - User chooses a role entry: `Admin`, `User`, or `Store Owner`
  - Role is saved globally (via context/localStorage)
- **Login / Registration Pages**
  - Form-based entry with validations
  - Auth system verifies user and role

#### 🔐 Authentication Flow:
- On successful login:
  - JWT / Session token issued
  - User info including `role` saved to client context
  - Server returns scoped user data (e.g., `mustChangePassword`, `profile`, etc.)
- Auth persistence is handled via:
  - Local storage on frontend
  - Token-based verification on backend for protected routes

---

### 2. **Core User Roles & Role-Based Access**

| Role          | Core Capabilities                                                                 |
|---------------|------------------------------------------------------------------------------------|
| **Admin**     | Full control: Manage users, manage stores, view dashboard stats                   |
| **Normal User**| Register, browse stores, rate stores, edit profile, change password              |
| **Store Owner**| View dashboard, see who rated their store, view/store's average rating           |

All users share:
- Authentication
- Profile management
- Password update functionality

---

### 3. **Routing & Access Control**

#### 🔄 Route Handling:
- Routes are dynamically controlled based on `role`
- Unauthorized users are **redirected** to appropriate entry points
- Route protection is enforced on both:
  - **Frontend** (via client-side guards)
  - **Backend** (via middleware/auth policies)

---

### 4. **Business Logic Flow by Module**

#### 🧑‍💼 **Admin Module**
- **Dashboard**: Aggregate counts (users, stores, ratings)
- **Manage Users**:
  - View user list
  - Add new users (assign role, validate input)
- **Manage Stores**:
  - View store list
  - Add new store (assign owner)
  - Sorting and filtering supported

#### 👤 **Normal User Module**
- **Store List**:
  - View all registered stores
  - Search and sort by name/address/rating/email
- **Store Details**:
  - View average rating
  - Submit rating (1–5)
  - View personal rating & update it
- **Profile**:
  - View name, email, address
  - Edit personal details
  - Change password

#### 🏪 **Store Owner Module**
- **Dashboard**:
  - View average rating of owned store
  - List of users who rated (with their rating/comment)
- **Profile**:
  - View personal info
  - Change password

---

### 5. **Validation & Rules Engine**

#### ✍️ Form Validations:
- Name: 20–60 chars
- Email: Valid format
- Password: 8–16 chars, 1 uppercase, 1 special character
- Address: Max 400 chars
- Ratings: Integer only (1 to 5)

#### 📊 Business Rules:
- One user → One rating per store (updatable)
- Ratings can't be deleted
- Email for store is display-only, not login-enabled
- Users can only view/update their own data
- Admin can filter/sort by Name, Email, Address, Role

---

### 6. **Data Flow & Database**

#### 🧮 Entities:
- `Users`: name, email, address, password (hashed), role, mustChangePassword
- `Stores`: name, address, email, ownerId
- `Ratings`: userId, storeId, value (1–5), comment, timestamp

#### 🔗 Relationships:
- One user can submit multiple ratings (one per store)
- One store is owned by one store owner
- Admins have no direct store relation

#### 📦 Backend Logic:
- Handles creation, editing, filtering, and sorting
- Enforces user role checks on all requests
- Aggregates average ratings for dashboards

--- 


### 7. **Future Expandability**
- Backend Implementation 
- Integration between frontend and backend 
- Add role: **SuperAdmin** for audit logs & analytics
- Add **pagination** to long lists (ratings, users)
- Add **notifications or messages**
- Enhance security with **token expiration** and **2FA**
- Add **store image/logo support**
- Implement **ProtectedRoute** enforcement by role

---
```
NOTE: Entire implementation for the frontend is done.
```