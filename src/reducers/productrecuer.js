const PRODUCT_TYPE = {
  setTitle: "setTitle",
  setDescription: "setDescription",
  setPrice: "setPrice",
  setImage: "setImage",
  setLocation: "setState",
  setName: "setName",
};
const reducerforProducts = (state, action) => {
  switch (action.type) {
    case PRODUCT_TYPE.setTitle:
      return {
        ...state,
        title: action.payload,
      };
    case PRODUCT_TYPE.setDescription:
      return {
        ...state,
        description: action.payload,
      };
    case PRODUCT_TYPE.setPrice:
      return {
        ...state,
        price: action.payload,
      };
    case PRODUCT_TYPE.setImage:
      return {
        ...state,
        image: action.payload,
      };
    case PRODUCT_TYPE.setName:
      return {
        ...state,
        name: action.payload,
      };
    case PRODUCT_TYPE.setLocation:
      return {
        ...state,
        location: action.payload,
      };
  }
};
export  { reducerforProducts };
export{PRODUCT_TYPE}