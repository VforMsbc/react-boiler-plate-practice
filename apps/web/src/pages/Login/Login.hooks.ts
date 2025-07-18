import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../store/reducers/auth/service';
import { ILocalAuth } from '../../store/reducers/auth/type';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { LOCALSTORAGE_VARIABLE } from '../../util/constants';

export interface ILoginErrSchema {
  email?: string;
  password?: string;
}

export interface ILoginSchema {
  email: string;
  password: string;
}

export interface IFormInputFilleds {
  id: number;
  lable: string;
  type: 'number' | 'text' | 'password' | 'tel' | 'url';
  disable: boolean;
  placeholder: string;
  value: keyof ILoginSchema;
  errValue: keyof ILoginErrSchema;
}

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const isEmailHasErr = (email: string) => {
  if (!email) {
    return 'Email is required';
  } else if (!emailRegex.test(email)) {
    return 'Please enter valid email address';
  } else {
    return '';
  }
};

const validateFields = (data: ILoginSchema) => {
  const err: ILoginErrSchema = {};
  let isValid = true;
  if (isEmailHasErr(data.email)) {
    err.email = isEmailHasErr(data.email);
    isValid = false;
  }
  if (!data.password) {
    err.password = 'Password is required';
    isValid = false;
  }
  return { isValid, err };
};

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.auth);
  const [searchParams] = useSearchParams();

  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({
    email: '',
    password: '',
  });
  const [loginDetailsErr, setLoginDetailsErr] = useState<ILoginErrSchema>({});

  const handleChangeLoginDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
    setLoginDetailsErr({ ...loginDetailsErr, [name]: '' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    const hasError = validateFields(loginDetails);
    if (hasError.isValid) {
      try {
        const payload: ILoginSchema = {
          email: loginDetails.email,
          password: loginDetails.password,
        };
        const promise = dispatch(loginUser(payload));
        // const res = await loginUser.fulfilled.match(promise)
        // const data=await promise.payload
        const res = await promise.unwrap();
        const data: ILocalAuth = {
          ...res.data,
          access_token: res.access_token,
        };
        localStorage.setItem(LOCALSTORAGE_VARIABLE, JSON.stringify(data));
        setLoginDetails({
          email: '',
          password: '',
        });
        navigate('/', { replace: true });
      } catch (error: any) {
        console.log(error.message);
        if (error?.message)
          toast.error(error.message, { toastId: 'login_error' });
      }
    } else {
      setLoginDetailsErr(hasError.err);
    }
  };

  useEffect(() => {
    const message = searchParams.get('message');
    const path = searchParams.get('path');

    if (message && path) {
      toast(message, { theme: 'light', toastId: 401 });
      navigate('/auth/login', {
        replace: true,
        state: {
          location: {
            pathname: JSON.parse(path)?.pathname,
            search: JSON.parse(path)?.search,
          },
        },
      });
    }
  }, [searchParams]);

  return {
    variable: {
      isLoading,
      loginDetails,
      loginDetailsErr,
    },
    methods: {
      handleChangeLoginDetails,
      handleSubmit,
    },
  };
};

export { useLogin };
