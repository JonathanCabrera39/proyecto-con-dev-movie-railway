const jwt = require("../utils/jwt");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ msg: "no autorizado, falta token" });
  }
  // limpiar el token
  const token = req.headers.authorization.replace("Bearer ", "");
  console.log(token);
  // res.status(500).send({msg:"md bloquea"});

  try {
    //obtener el payload del token
    const payload = jwt.decode(token, process.env.SECRET_KEY);
    // verificar si el token ha expirado
    const { exp } = payload;
    const currentDate = new Date().getTime();
    if (exp <= currentDate) {
      return res.status(400).send({ msg: "token expirado" });
    }
    // si esta todo bien, pasar a la siguiente funcion
    req.user = payload;
    next();
  } catch (err) {
    return res.status(400).send({ msg: "token invalido" });
  }
}

module.exports = {
  verifyToken,
};
