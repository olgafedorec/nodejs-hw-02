import { Schema, model } from 'mongoose';
import { contactTypes, phoneNumberRegexp } from '../../constants/contacts.js';
import { handleSaveError, setUpdateOptions } from './hooks.js';
// import { required } from 'joi';

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "name must be exist"],
        min: 3,
        max: 20
    },
    phoneNumber: {
        type: String,
        required: [true, "type of contact must be exist"],
        match: phoneNumberRegexp,
    },
    email: {
        type: String,
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: contactTypes,
        required: [true, "type of contact must be exist"],
        default: "personal",
    },
    photo: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
}, {versionKey: false, timestamps: true});

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateOptions);

contactSchema.post("findOneAndUpdate", handleSaveError);

const ContactCollection = model("contact", contactSchema);

export const sortFields = ["name", "phoneNumber", "email", "isFavourite", "contactType", "createdAt", "updatedAt"]; 

export default ContactCollection;
