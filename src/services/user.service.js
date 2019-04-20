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

    async Store(user){
        let stored = null;
        const {id, username,firstname,lastname,password,status} = user;
        if (user) {
            stored = await UserModel.create({id,username,firstname,lastname,password,status});
        }
        return stored;
    }
}

export default UserService;