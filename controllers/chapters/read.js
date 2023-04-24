const name = "chapters";
const read = (req, res, next) =>
   res.status(200).render("index", {
      title: `/${name}`,
      subtitle: `Endpoint de ${name}`,
   });
export default read;
