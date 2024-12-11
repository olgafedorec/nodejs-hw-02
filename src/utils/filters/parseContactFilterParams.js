import parseType from "./parseType.js";
import parseBoolean from "./parseBoolean.js";

const parseContactFilterParams = ({ contactType, isFavourite}) => {
  const parsedContactType = parseType(contactType);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};

export default parseContactFilterParams;