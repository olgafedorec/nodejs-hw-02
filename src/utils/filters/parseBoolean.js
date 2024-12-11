// import { isFavourite } from "../../constants/contacts.js";

const parseBoolean = value => {
    if(value === "true") return true;
    if(value === "false") return false;

    return;
};

export default parseBoolean;