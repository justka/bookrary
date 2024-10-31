import { FORM_FIELD_NAME } from "constants/formFieldName";

export function validateFormFieldValue({ name, required, value }) {
  if (!required && !value) {
    return undefined;
  }
  if (required && !value) {
    return "This field is required";
  }
  switch (name) {
    case FORM_FIELD_NAME.AUTHOR: {
      const authorPattern = /^[a-z żółćęśąźń]{1,}$/;
      const authorResult = authorPattern.test(value.toLocaleLowerCase());
      if (!authorResult) {
        return "This field must contain only letters or spaces";
      }
      return undefined;
    }
    case FORM_FIELD_NAME.PAGES_QUANTITY: {
      const pagesQuantityPattern = /^[0-9]{1,}$/;
      const pagesQuantityResult = pagesQuantityPattern.test(value);
      if (!pagesQuantityResult) {
        return "This field must contain at least 1 digit";
      }
      if (+value === 0) {
        return "This field value cannot be 0";
      }
      return undefined;
    }
    case FORM_FIELD_NAME.PUBLISH_YEAR: {
      const currentYear = new Date().getFullYear();
      const minYear = 1900;
      const publishYearPattern = /^[0-9]{4}$/;
      const publishYearResult = publishYearPattern.test(value);
      if (!publishYearResult) {
        return "This field must contain 4 digits";
      }
      if (+value < minYear) {
        return `This field value cannot be lower than ${minYear}`;
      }
      if (+value > currentYear) {
        return `This field value cannot be higher than ${currentYear}`;
      }
      return undefined;
    }
    case FORM_FIELD_NAME.TITLE: {
      const titlePattern = /^[a-z0-9 żółćęśąźń-]{1,}$/;
      const titleResult = titlePattern.test(value.toLocaleLowerCase());
      if (!titleResult) {
        return "This field must contain only letters, digits, spaces or dashes";
      }
      return undefined;
    }
  }
}
