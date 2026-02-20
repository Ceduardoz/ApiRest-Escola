import bcrypt from "bcryptjs";
import Sequelize, { Model } from "sequelize";

export default class User extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "Nome precisa ter mais de 3",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: "Email já existe",
        },
        validate: {
          isEmail: {
            msg: "Email Inválido"
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type:Sequelize.VIRTUAL,
        validate: {
          len: {
            args: [8, 255],
            msg: "A senha precisa ter 8 caracteres"
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook("beforeSave", async user => {
      if (user.password) user.password_hash = await bcrypt.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(password){
    return bcrypt.compare(password, this.password_hash);
  }
}
