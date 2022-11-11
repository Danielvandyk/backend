const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://bitclases:compak*@bit-cluster.2njakta.mongodb.net/${dbName}?retryWrites=true&w=majority`
//`mongodb+srv://daniel24:Quala8205@cluster0.o2j0gc2.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose