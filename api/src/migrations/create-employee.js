'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      idSST: {
        type: Sequelize.STRING
      },
      urlFile: {
        type: Sequelize.STRING
      },
      eyeColor: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      issued: {
        type: Sequelize.STRING
      },
      expires: {
        type: Sequelize.STRING
      },
      test: {
        type: Sequelize.STRING
      },
      test2: {
        type: Sequelize.STRING
      },
      test3: {
        type: Sequelize.STRING
      },
      test4: {
        type: Sequelize.STRING
      },
      ctf3: {
        type: Sequelize.STRING
      },
      ctf4: {
        type: Sequelize.STRING
      },
      issuedBy: {
        type: Sequelize.STRING
      },
      iBy2: {
        type: Sequelize.STRING
      },
      iBy3: {
        type: Sequelize.STRING
      },
      iBy4: {
        type: Sequelize.STRING
      },
      verifiedBy: {
        type: Sequelize.STRING
      },
      vrf2: {
        type: Sequelize.STRING
      },
      vrf3: {
        type: Sequelize.STRING
      },
      vrf4: {
        type: Sequelize.STRING
      },
      issuedOn: {
        type: Sequelize.STRING
      },
      iuOn2: {
        type: Sequelize.STRING
      },
      iuOn3: {
        type: Sequelize.STRING
      },
      iuOn4: {
        type: Sequelize.STRING
      },
      certification: {
        type: Sequelize.STRING
      },

      ctf2: {
        type: Sequelize.STRING
      },

      ctf3: {
        type: Sequelize.STRING
      },
      ctf4: {
        type: Sequelize.STRING
      },



      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};