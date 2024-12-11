import { contactTypes } from "../../constants/contacts.js";

const parseType = value => {
  if(typeof value !== "string") return;
  if(!contactTypes.includes(value)) return;

  return value;
};

export default parseType;