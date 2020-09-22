import produce from 'immer';
import {
  ModelOfOnboardGlobalState,
  ModelOfActionReducerOfOnboardGlobalState,
  ActionTypesOfOnboardGlobalState,
} from './model';

const INITIAL_STATE: ModelOfOnboardGlobalState = {
  checked: false,
};

export const onboard = (
  state = INITIAL_STATE,
  action: ModelOfActionReducerOfOnboardGlobalState,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesOfOnboardGlobalState.CHECK_IN_REQUEST: {
        draft.checked = true;
        break;
      }
      case ActionTypesOfOnboardGlobalState.CHECK_OUT_REQUEST: {
        draft.checked = false;
        break;
      }
      default:
    }
  });
};
