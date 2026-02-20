import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,255],
            msg: "Nome precisa ter mais de 3 caracteres",
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,255],
            msg: "sobrenome precisa ter mais de 3 caracteres",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: "E-mail já existe",
        },
        validate: {
          isEmail: {
            msg: "Email inválido"
          }
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: "Idade precisa ser um número inteiro"
          },
        },
      },
      peso: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: "Peso precisa ser um número inteiro ou de ponto flutuante"
          },
        },
      },
      altura: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: "Altura precisa ser um número inteiro ou de ponto flutuante"
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models){
    this.hasMany(models.Photo, { foreignKey: "aluno_id" });
  }
}
