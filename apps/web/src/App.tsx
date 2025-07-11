import ProtectedRoutes from './routes/protected/ProtectedRoutes';
import AuthRoutes from './routes/auth/AuthRoutes';
import { Route, Routes } from 'react-router-dom';
import { AppTheme } from '@app/lib/shared-components';
import 'react-toastify/dist/ReactToastify.css';
import DynamicFormComponent from './pages/components/form/DynamicFormComponent';

const App = () => {
  return (
    <AppTheme>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<ProtectedRoutes />} />
        <Route path="/form" element={<DynamicFormComponent />} />
      </Routes>
    </AppTheme>
  );
};

export default App;
