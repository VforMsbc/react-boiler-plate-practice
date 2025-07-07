import { IUserBody } from '../../../services/userManagementServices';
import { IFormErrSchema } from './UserForm.hooks';

const validateFields = (data: IUserBody, isEdit: boolean) => {
  const err: IFormErrSchema = {};
  let isValid = true;
  if (!data.first_name) {
    err.first_name = 'First name is required';
    isValid = false;
  }
  if (!data.last_name) {
    err.last_name = 'Last name is required';
    isValid = false;
  }
  return { isValid, err };
};

export { validateFields };
