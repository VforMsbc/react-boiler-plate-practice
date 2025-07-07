import { Routes, Route, Navigate } from 'react-router-dom';
import AuthWrraper from './wrapper/AuthWrraper';
import Login from '../../pages/Login/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthWrraper />}>
        <Route index element={<Navigate to="/auth/login" replace />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
