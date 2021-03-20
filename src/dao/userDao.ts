import mongoose from 'mongoose';
import { UserSchema, UserModel } from '../models/userModels';

const UserModel = mongoose.model('Student', UserSchema);
export class userdao {
   
    async save(body: UserModel) {
        const user = new UserModel(body);
         return await user.save();
    }
    async getById(id:String){
        const user = new UserModel(id);
        return await user;
    }
}
//     async getall(body: UserModel){
//         const User = new UserModel(body);
//         return await User;
//     }
//     async put(body : UserModel){
//         const User = new UserModel(body);
//         return await User;
//     }
//     async findByIdAndDelete(id:String){
//         const User = new UserModel(id);
//         //return await User;
//     }
// }
