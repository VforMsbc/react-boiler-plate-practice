import { toast } from 'react-toastify';
import { getLocalAuth } from '../../util/getLocalAuth';

const requestHandler = (request: any) => {
  request.headers.Authorization = `Bearer ${getLocalAuth()?.access_token}`;
  request.headers['Access-Control-Allow-Origin'] = '*';
  return request;
};

const requestErrorHandler = (err: any) => {
  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  if (error.code === 'ECONNABORTED') {
    toast.error(error.message);
  } else if (error.code === 'ERR_NETWORK') {
    toast.error('Internet connection problem.', { toastId: 'ERR_NETWORK' });
  } else if (error?.response?.status >= 400 && error?.response?.status <= 499) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = `/auth/login?message=${encodeURIComponent(
        'Session timeout'
      )}&&path=${JSON.stringify(window.location)}`;
    } else if (error.response?.data?.Message) {
      error.code = 'RES_ERROR';
    }
  } else if (error?.response?.status >= 500) {
    if (error.response?.data?.message) {
      toast.error(error.response?.data.message ?? 'Internal Server Error', {
        toastId: '500',
      });
    } else {
      toast.error('Internal Server Error', { toastId: '500' });
    }
  }
  return Promise.reject(error);
};

export {
  requestHandler,
  requestErrorHandler,
  responseHandler,
  responseErrorHandler,
};
