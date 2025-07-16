import { Route, Routes } from 'react-router-dom';
import ProtectedWrapper from './wrapper/ProtectedWrapper';
import UserProfile from '../../pages/ProfileUser/UserProfile';
import { InDevelopment } from '../../components/InDevelopment';
import Home from '../../pages/Home/Home';
import Orders from '../../pages/Orders/Orders';
import Products from '../../pages/Products/Products';
import User from '../../pages/Users/User';
import Post from '../../pages/Post/Post';

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedWrapper />}>
        <Route path="user_profile" element={<UserProfile />} />
        <Route path="*" element={<InDevelopment />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<User />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
