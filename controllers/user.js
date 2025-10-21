const User = require('../models/user');

//obtener el usuario
async function getMe(req, res) {
  // obtener el id del usuario mediante token
  const { user_id } = req.user;
  // verificar que exista ese usuario
  const user = await User.findById(user_id);
// existe es usuario ? 
  if (!user) {
    res.status(400).send({msg:"no se ha encontrado usuario"})
  } else{
    res.status(200).send(user)
  }
  console.log(req.user);
  res.status(200).send({msg:"ok"});
}

async function getUsers(req, res) {
    try {
      const users = await User.find();

      return res.status(200).send({ users });
    } catch (err) {
      res.status(500).send({ msg: "error en el servidor" });
    }
}

module.exports = {
  getMe,
  getUsers
};
