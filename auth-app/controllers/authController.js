import user from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Create a new User
export const register = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new user({ username, email });
        await newUser.setPassword(password);
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

//Login a User
export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await user.findById(userId); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

//Hash the password
UserSchema.methods.setPassword = async function (password) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
};


//Create and Return the token
export const getToken = (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
};

//Export the functions
module.exports = { register, getUser, getToken };









   