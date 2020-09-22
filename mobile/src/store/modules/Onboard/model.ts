export type ModelOfOnboardGlobalState = {
  checked: boolean;
};

export enum ActionTypesOfOnboardGlobalState {
  CHECK_IN_REQUEST = 'CHECK_IN_REQUEST',
  CHECK_OUT_REQUEST = 'CHECK_OUT_REQUEST',
}

export type ModelOfActionReducerOfOnboardGlobalState = {
  payload: ModelOfOnboardGlobalState;
  type: string;
};
