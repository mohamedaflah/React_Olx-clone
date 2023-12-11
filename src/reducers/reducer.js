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
        loginModal: true,
      };
    case TYPE.loginModalClose:
      return {
        ...state,
        loginModal: false,
      };
  }
};
export { reducer, TYPE };
