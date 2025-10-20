const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { type: String, required: true },
  active: { type: Boolean, default: true },
  role: { type: String, default: "user" }
}, {
  timestamps: true,
  collection: 'users'  // FORZAR nombre correcto
});

// ESPECIFICAR EXPLÍCITAMENTE EL NOMBRE DE LA COLECCIÓN
module.exports = mongoose.model("User", userSchema, "users");




