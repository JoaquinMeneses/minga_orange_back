import Carousel from "../../models/Carousel.js"

let read = async(req, res, next)=>{     // La funcion controladora debe ser asincrona para poder esperar la respuesta de Mongo
    try {                               // Utilizo la sintaxis de try/catch para intentar algo y catchear los errores que puedan surgir 
        let all = await Carousel.find() //Utilizo el metodo find() para buscar todos los recursos del modelo (que en este caso es CATEGORY) 
        return res.status(200)          //Configuro la respuesta que le tengo que enviar al cliente (front)
                .json({
                    carousels:all
                })
    } catch(error){
        console.log(error)
        return res.status(400)
                .json({
                    error: "Ha ocurrido un error"
                })
    }
}

export default read 