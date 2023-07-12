import userModel from "../models/userModel";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
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

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Usuario ya registrado",
      });
    }

    const hashedPassword = await hashedPassword(password);
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error en el registro",
      error,
    });
  }
};
