import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface UserModel {
    _id: string
    userId: number,
    Name: string,
    mobileNumber: number,
    token: string
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
    },
    token: {
        type: String
    }
});
