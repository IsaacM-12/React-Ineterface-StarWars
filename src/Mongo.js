const mongoose = require('mongoose')

// mongodb://localhost:27017

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
.then( () => console.log('concet'))
.catch( (e) => console.log('Error' + e) )

const ImagenSchema = mongoose.Schema({
    id: Number,
    url: String
})

const ImagenModel = mongoose.model('jmm', ImagenSchema)

const mostrar = async ()=>{
    const imagen = await ImagenModel.find()
    console.log(imagen)
}

