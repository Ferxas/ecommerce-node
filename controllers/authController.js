import userModel from "../models/userModel.js";
import { hashPassword } from '../helpers/authHelpers.js';


export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validations
    if (!name) {
      return res.send({ error: "El dato del nombre es obligatorio" });
    }
    if (!email) {
      return res.send({ error: "El dato del correo es obligatorio" });
    }
    if (!password) {
      return res.send({ error: "El dato de la contaseña es obligatorio" });
    }
    if (!phone) {
      return res.send({ error: "El dato del teléfono es obligatorio" });
    }
    if (!address) {
      return res.send({ error: "El dato de la drección es obligatorio" });
    }
    // si el usuario existe
    const existingUser = await userModel.findOne({ email });
    // va a comprobarlo si existe
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Usuario ya registrado",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: 'Usuario registrado correctamente',
      user,

    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error en el registro",
      error,
    });
  }
};

export default registerController;