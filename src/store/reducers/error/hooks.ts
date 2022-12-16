import { useEffect } from 'react';
import { logoutUser } from '../user/reducer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addError as dispatchError, removeError as deleteError } from './reducer';

export default function useErrors() {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.errors);

  const addError = (error: ErrorType) => {
    dispatch(dispatchError(error));
    if (error.code === 'UNAUTHORIZED') {
      dispatch(logoutUser());
    }
  };

  const removeError = (error: string) => {
    dispatch(deleteError(error));
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timeout = setTimeout(() => {
        removeError(errors[0].code);
      }, 10000);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [errors]);

  return { errors, addError, removeError };
}
