let name = "companies"
let read = (req, res, next)=>res.status(200).render('index', { 
    title: '/'+ name.toUpperCase() ,
    subtitle: "Endpoints of "+ name
})

export default read