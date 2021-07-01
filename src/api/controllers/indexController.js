const bienvenida = (req, res) => {
    return res.status(200).json({success:true , msg:"Bienvenido Cristian"})
}



module.exports = {
    bienvenida
}