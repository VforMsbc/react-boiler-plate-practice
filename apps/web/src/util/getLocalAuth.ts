import { ILocalAuth } from '../store/reducers/auth/type';
import { LOCALSTORAGE_VARIABLE } from './constants';

export const getLocalAuth = (): ILocalAuth => {
  const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
  const authLocal: ILocalAuth =
    storedAuth !== null ? JSON.parse(storedAuth) : null;
  return authLocal;
};
