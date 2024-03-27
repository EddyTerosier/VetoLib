const sequelize = require("../../database/database");
const { DataTypes } = require("sequelize");
const User = require("./userModel");
const Cabinet = require("./cabinetModel");
const Animal = require("./animalModel");

const Appointment = sequelize.define(
    "appointment",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hour: { 
            type: DataTypes.TIME, 
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
            defaultValue: "pending",
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    },
);

Appointment.belongsTo(User);
Appointment.belongsTo(Cabinet);
Appointment.belongsTo(Animal);

module.exports = Appointment;   