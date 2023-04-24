import Category from "./../../Models/Category.js";

let read = async (req, res, next) => {
    try {
        let all = await Category.find();
        return res.status(200).json({ categories: all });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "ocurrio un error" });
    }
};

export default read;
