import { Schema, Types, model } from "mongoose";

let schema = new Schema(
    {
        manga_id: { 
            type: Types.ObjectId, 
            ref: "authors", 
            required: true },
        title: { type: String, required: true },
        cover_photo: { type: String, required: true },
        pages: [{ type: String, required: true }],
        order: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

let collection = "chapters"; //debe ser SIEMPRE en plural xq es un conjunto de recursos, documentos, etc y en lo posible en minuscula
let Chapter = model(collection, schema);

export default Chapter;
