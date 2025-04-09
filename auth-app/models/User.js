import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Hash the password before saving the user
UserSchema.methods.setPassword = async function (password) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
};

module.exports = mongoose.model('User', UserSchema);