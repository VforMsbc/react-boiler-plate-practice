import { IUserDetails } from '@app/lib/shared-components';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IUserDetailsData } from '../../../components/Table/types/type';
import { IUserBody } from '../../../services/userManagementServices';
import {
  IAPIResponseSchema,
  ILocalAuth,
} from '../../../store/reducers/auth/type';
import {
  createUser,
  updateUser,
} from '../../../store/reducers/userManagement/service';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { IThunkPromise } from '../../../util/types';
import { validateFields } from './validations';
import { getLocalAuth } from '../../../util/getLocalAuth';

export interface IFormErrSchema {
  [key: string]: string | undefined;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const useUserForm = (isEdit: boolean, rowData?: IUserDetailsData) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.usermanagement);

  const auth: ILocalAuth | null = getLocalAuth();

  const [formData, setFormData] = useState<IUserBody>({
    user_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isadmin: false,
    isactive: false,
    permissions: '',
    islocked: false,
  });

  const [formDataErr, setFormDataErr] = useState<IFormErrSchema | null>({});

  const handleInputChange = (fieldId: keyof IUserBody, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldId]: value,
    }));
    setFormDataErr({ ...formDataErr, [fieldId]: '' });
  };

  const handleSubmit = async () => {
    if (isLoading) return;
    const hasError = validateFields(formData, isEdit);
    if (!hasError.isValid) return setFormDataErr(hasError.err);

    //api calling for create and update user
    try {
      let payload = structuredClone(formData);
      payload = {
        ...payload,
        permissions: null,
      };
      let promise: IThunkPromise<IAPIResponseSchema<IUserDetails[]>, IUserBody>;
      if (isEdit && rowData) {
        payload.user_id = rowData.id;
        promise = dispatch(updateUser(payload));
      } else promise = dispatch(createUser(payload));
      await promise.unwrap();
    } catch (err: any) {
      console.log(err);
    }
  };

  return {
    variable: {
      isLoading,
      formData,
      formDataErr,
      auth,
    },
    methods: {
      setFormData,
      handleInputChange,
      handleSubmit,
    },
  };
};

export default useUserForm;
