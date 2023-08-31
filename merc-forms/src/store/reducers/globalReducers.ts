type State = {
  [key: string]: any;
};
type Action = {
  type: string;
  payload: object;
};

const globalReducers = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "setUserProfile": {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
      case "setIsLoading": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "setAllForms": {
      return {
        ...state,
        allForms: action.payload,
      };
    }
    default:
      return state;
  }
};

export { globalReducers };
