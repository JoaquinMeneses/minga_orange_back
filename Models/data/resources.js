import 'dotenv/config.js'
import '../../config/database.js'
import Resource from "../Resource.js"

let resources = [{
    cover_photo: "https://i.postimg.cc/PLD8Dwmm/Manga1.png"
}, {
    cover_photo: "https://i.postimg.cc/v4kVDz6Y/Manga2.png"
},{
    cover_photo: "https://i.postimg.cc/Kky3D8NC/Manga3.png"
}]

let newResources = async() => await Resource.insertMany(resources)

newResources()