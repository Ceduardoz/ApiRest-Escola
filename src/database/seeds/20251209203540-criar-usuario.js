const bcryptjs = require("bcryptjs");

module.exports = {
  async up (queryInterface) {
      await queryInterface.bulkInsert('users',
        [
          {
            nome: 'Luiz',
            email: "luiz1@gmail.com",
            password_hash: await bcryptjs.hash("luiz123456", 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'China',
            email: "chinahomem10@gmail.com",
            password_hash: await bcryptjs.hash("china123456", 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'Tereza',
            email: "tereza12@gmail.com",
            password_hash: await bcryptjs.hash("tereza123456", 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'Robson',
            email: "robson@gmail.com",
            password_hash: await bcryptjs.hash("robson123456", 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'Jailson',
            email: "jaja@gmail.com",
            password_hash: await bcryptjs.hash("jailson123456", 8),
            created_at: new Date(),
            updated_at: new Date()
          }
        ], {});
  },

  async down () {}
};
