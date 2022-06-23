import Sequelize, { DataTypes } from 'sequelize';
import db from '../config/db';

export const Viaje = Sequelize.define("viajes", {
    id: DataTypes.BIGINT,
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_ida: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_vuelta: {
        type: DataTypes.DATE,
        allowNull: true
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    disponibles: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true
    }
})