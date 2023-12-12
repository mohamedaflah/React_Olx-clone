const validateForm = (title, description, price, image, location, name) => {
  let validate = true;
  if (!title || title.trim() !== "") {
    validate = false;
  }
  if (!description || description.trim() !== "") {
    validate = false;
  }
  if (!price) {
    validate = false;
  }
  if (!image) {
    validate = false;
  }
  if (!location) {
    validate = false;
  }
  if (!name) {
    validate = false;
  }
  return validate
};
export { validateForm };
