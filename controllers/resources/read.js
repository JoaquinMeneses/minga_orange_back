import Resource from "./../../Models/Resource.js";

let read = async (req, res, next) => {
    try {
        let all = await Resource.find();
        return res.status(200).json({ resources: all });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "ocurrio un error" });
    }
};

export default read;
