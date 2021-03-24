import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface UserModel {
    userId: Number,
    Name: String,
    mobileNumber: Number,
}

export const UserSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        require: true
    }
});
