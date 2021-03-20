import { userdao } from "../dao/userDao";
import { UserModel } from "../models/userModels";

let user: userdao;
export class UserService {
   
    constructor() {
        user = new userdao();
    }
  
    async usercreate(body: UserModel) {
        return await user.save(body);
    }
    async userread(id:String) {
        return await user.getById(id);
}
}

// async userget(body: UserModel) {
//     return await user.getall(body);
// }

// async userupdate(body: UserModel) {
//     return await user.put(body);}
    
// async userdelete(id:String) {
//         return await user.findByIdAndDelete(id);
// }
// }
