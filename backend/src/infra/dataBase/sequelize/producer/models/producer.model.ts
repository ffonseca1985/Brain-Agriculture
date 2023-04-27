import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../connection';

export class ProducerModel extends Model {
  public id!: string;
  public name!: string;
  public type: number;
  public farmName: string;
  public city: string;
  public state: string;
  public areaTotalAgricultable: number;
  public areaTotalVegetacao: number;
  public total: number;
  public cultures: string;
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    farmName : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    areaTotalAgricultable: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    areaTotalVegetacao: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    cultures: {
      type: DataTypes.STRING,
      allowNull: false,
    }
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