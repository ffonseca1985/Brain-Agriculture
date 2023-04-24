import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../connection';

export class ProducerModel extends Model {
  public id!: number;
  public name!: string;
}

ProducerModel.init(
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Producer',
    tableName: 'Producer', // Specify the name of your PostgreSQL table
  }
);


ProducerModel.sync({ alter: true })
  .then(() => {
    console.log('Table created successfully or already exists');
  })
  .catch((error) => {
    console.error('Failed to create table:', error);
  });

export default ProducerModel;