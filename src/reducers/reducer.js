const TYPE = {
  languageToggle: "languageToggle",
  loginModalOpen: "loginModalOpen",
  loginModalClose: "loginModalClose",
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.languageToggle:
      return {
        ...state,
        languageToggle: !state.languageToggle,
      };
    case TYPE.loginModalOpen:
      return {
        ...state,
        loginModal: action.payload,
      };
  }
};
export { reducer, TYPE };
