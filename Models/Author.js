import { Schema, Types, model } from "mongoose";

let schema = new Schema(
    {
        name: { type: String, required: true },
        last_name: { type: String,required: false },
        city: { type: String, required: true },
        country: { type: String, required: true },
        date: { type: Date },
        photo: { type: String, required: true },
        active: { type: Boolean, required: true },
        user_id: { type: 
            Types.ObjectId, 
            ref: "users", 
            required: true },
    },
    {
        timestamps: true,
    }
);

let collection = "authors"; //debe ser SIEMPRE en plural xq es un conjunto de recursos, documentos, etc y en lo posible en minuscula
let Author = model(collection, schema);

export default Author;
