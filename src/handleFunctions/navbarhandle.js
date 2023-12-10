import { TYPE } from "../reducers/reducer";

const handleLanguageToggle = (dispatch) => {
    dispatch({type:TYPE.languageToggle})
};
export { handleLanguageToggle };
