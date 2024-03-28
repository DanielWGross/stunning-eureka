const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageCount: DataTypes.INTEGER,
  },
  {
    sequelize,
  },
);

module.exports = Book;
