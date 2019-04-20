import {User as UserModel} from '../lib/database/';

class UserService{
    
    GetAll(){
        const data =  UserModel.findAll();
        return data;
    }

    GetById(UserId){
        const data = UserModel.findByPk(UserId);
        return data;
    }
}

export default UserService;