require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  use_env_variable: 'DATABASE_URL',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  timezone: 'America/Sao_Paulo',
};
