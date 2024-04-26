const User = require('../models/usersModel');

const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({
            status: "Success",
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Error",
            message: "Internal server error",
        });
    }
};

const replaceUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.status(200).json({
            status: "Success",
            data: updatedUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Error",
            message: "Internal server error",
        });
    }
};

const addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "Success",
            data: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Error",
            message: "Internal server error",
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Error",
            message: "Internal server error",
        });
    }
};

module.exports = {
    getUser,
    replaceUser,
    addUser,
    deleteUser,
};
