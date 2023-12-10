const TYPE = {
  languageToggle: "languageToggle",
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.languageToggle:
      return {
        ...state,
        languageToggle: !state.languageToggle,
      };
  }
};
export { reducer, TYPE };
