import { useDispatch } from 'react-redux';
import { onboardCheckInRequest } from '@src/store/modules/Onboard/actions';

export const useOnboardController = () => {
  const dispatch = useDispatch();
  const submitButton = () => dispatch(onboardCheckInRequest());

  return {
    handleController: {
      submitButton,
    },
  };
};
