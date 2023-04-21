import mongoose from "mongoose";

let schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        logo: { type: String, required: true },
        website: { type: String, required: true },
        description: { type: String, required: false },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true,
        },
        active: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
);

let collection = "companies"; //debe ser SIEMPRE en plural xq es un conjunto de recursos, documentos, etc y en lo posible en minuscula
let Company = mongoose.model(collection, schema);

export default Company;
