import { ActionTypesOfOnboardGlobalState } from './model';

export const onboardCheckInRequest = () => {
  return {
    type: ActionTypesOfOnboardGlobalState.CHECK_IN_REQUEST,
    payload: {},
  };
};

export const onboardCheckOutRequest = () => {
  return {
    type: ActionTypesOfOnboardGlobalState.CHECK_OUT_REQUEST,
    payload: {},
  };
};
