import User from "../models/user.model.js";

import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 12);
        const newUser = new User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        res.status(201).json("User registered successfully")
    }
    catch (err) {
        throw new Error(err)
    }
}
const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) throw new Error(createError(404, "User not found"))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) throw new Error(createError(400, "Wrong password or username!"))

        const token = jwt.sign({ id: user._id, isSeller: user.isSeller }, process.env.JWT_KEY)

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);

    } catch (err) {
        throw new Error(err)
    }
}

const logout = async (req, res) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true
    }).status(200).json("User logout successfully!")
}


export { register, login, logout }