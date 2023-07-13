import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from '../helpers/authHelpers.js';
import { Jwt } from 'jsonwebtoken'

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
export const loginController = async (req, res) => {
  try {
    const {email, password} = req.body
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success:false,
        message: 'Email y contraseña'
      })
    }
    // comprobar usuario
    const user = await userModel.findOne({email})
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registered'
      })
    }
    const match = await comparePassword(password, user.password)
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "contraseña erronea"
      })
    }
    // token
    const token = await Jwt.sign({_id:user._id}, process.env.JWT_SECRET, {
      expresIn: "7d"
    });
    res.status(200).send({
      success: true,
      message: 'Ingresaste correctamente',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
      },
      token,
    });
  } catch(error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error ingresando',
      error
    })
  }
}

// test controller
export const testController = (req, res) => {
  res.send('Ruta protegida');
}