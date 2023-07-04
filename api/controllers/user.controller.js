import User from '../models/user.model.js';

import createError from '../utils/createError.js';

const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
        throw new Error(createError(403, "You can delete only your account!"));
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");

}

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
}