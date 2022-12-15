import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addError as dispatchError, removeError as deleteError } from '../store/reducers/error/reducer';

export default function useErrors() {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.errors);

  const addError = (error: ErrorType) => {
    dispatch(dispatchError(error));
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
