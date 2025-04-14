import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/public/Home';
import Register from '../pages/public/Register';
import Login from '../pages/public/Login';
import StoreList from '../pages/user/StoreList';
import ProfileUser from '../pages/user/ProfileUser';
import StoreDetails from '../pages/user/StoreDetails';
import ChangePassword from '../pages/user/ChangePassword';
import EditProfile from '../pages/user/EditProfile';
// import Logout from '../pages/user/Logout';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import ViewUsers from '../pages/admin/ViewUsers';
import AddUserForm from '../pages/admin/AddUserForm';
import ViewStores from '../pages/admin/ViewStores';
import AddStoreForm from '../pages/admin/AddStoreForm';
import ProfileOwner from '../pages/owner/ProfileOwner';
import DashboardOwner from '../pages/owner/DashboardOwner';
import ChangeOwnerPassword from '../pages/owner/ChangeOwnerPassword';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user/stores" element={<StoreList />} />
        <Route path="user/profile" element={<ProfileUser />} />
        <Route path="user/store/:id" element={<StoreDetails />} />
        <Route path="user/change-password" element={<ChangePassword />} />
        <Route path="user/edit-profile" element={<EditProfile />} />
        {/* <Route path="logout" element={<Logout />} /> */}
        <Route path="admin/dashboard" element={<DashboardAdmin />} />
        <Route path="admin/users" element={<ViewUsers />} />
        <Route path="admin/add-user" element={<AddUserForm />} />
        <Route path="admin/stores" element={<ViewStores />} />
        <Route path="admin/add-store" element={<AddStoreForm />} />
        <Route path="owner/profile" element={<ProfileOwner />} />
        <Route path="owner/dashboard" element={<DashboardOwner />} />
        <Route path="owner/change-password" element={<ChangeOwnerPassword />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;


