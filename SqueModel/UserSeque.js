
import sequelize from '../DB/db.js';
import { DataTypes } from 'sequelize';
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sex: {
    type: DataTypes.ENUM('1', '0'),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',  
  timestamps: false,   
});

module.exports = User;