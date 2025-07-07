import ProtectedRoutes from './routes/protected/ProtectedRoutes';
import AuthRoutes from './routes/auth/AuthRoutes';
import { Route, Routes } from 'react-router-dom';
import { AppTheme } from '@app/lib/shared-components';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AppTheme>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </AppTheme>
  );
};

export default App;
