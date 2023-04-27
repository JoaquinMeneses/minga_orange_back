import {Schema, model} from "mongoose";

let schema = Schema({
    cover_photo: {type: String, required: true}
})

let collection = "carousels"

let Carousel = model(collection, schema)

export default Carousel