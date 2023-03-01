const actions = {
  init: "INIT",
  upate: "UPDATE",
  add: "ADD",
  delete: "DELETE",
  setloading: "SET_LOADING",
  unsetloading: "UNSET_LOADING",
  seterror: "SET_ERROR",
  unseterror: "UNSET_ERROR",
  logout: "LOGOUT",
};

const initialState = {
  artifact: null,
  web3: null,
  accounts: null,
  networkID: null,
  contract: null,
  isloggedin: false,
  userID: "",
  email: "",
  displayName: "",
  Name: "",
  accessToken: null,
  photoURL: "",
  uid: null,
  HLA: null,
  cart: [],
  loading: false,
  error: false,
  errormessage: "",
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    case actions.upate:
      return { ...state, ...data };
    case actions.setloading:
      return { ...state, loading: true };
    case actions.unsetloading:
      return { ...state, loading: false };
    case actions.unseterror:
      return { ...state, error: false };
    case actions.seterror:
      return { ...state, error: true, errormessage: action.payload };
    case actions.logout:
      return { ...initialState };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export { actions, initialState, reducer };
