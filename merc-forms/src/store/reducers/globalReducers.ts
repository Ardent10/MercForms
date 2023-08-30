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
    case "toggleSideBar": {
      return {
        ...state,
        openCloseSideBar: action.payload,
      };
    }
    case "setToggleSnackbar": {
      return {
        ...state,
        toggleSnackbar: {
          ...action.payload,
        },
      };
    }
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
    default:
      return state;
  }
};

export { globalReducers };
