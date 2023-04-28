import 'dotenv/config.js'
import '../../config/database.js'
import Resource from "../Resource.js"

let resources = [{
    cover_photo: "https://res.cloudinary.com/diutf2pd0/image/upload/v1682447032/Manga1_wckxbz.png"
}, {
    cover_photo: "https://res.cloudinary.com/diutf2pd0/image/upload/v1682447032/Manga2_lelzyc.png"
},{
    cover_photo: "https://res.cloudinary.com/diutf2pd0/image/upload/v1682447032/Manga3_cocopz.png"
}]

let newResources = async() => await Resource.insertMany(resources)

newResources()