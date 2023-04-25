import { Schema, model } from "mongoose";

let schema = new Schema(
    {
        cover_photo: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

let collection = "resources"; //debe ser SIEMPRE en plural xq es un conjunto de recursos, documentos, etc y en lo posible en minuscula
let Resource = model(collection, schema);

export default Resource;
