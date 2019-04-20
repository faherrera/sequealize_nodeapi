import UserService from '../services/user.service';

const _userService = new UserService();

class UserController {

    async GetAll(req,res){
        const data = await _userService.GetAll();
        
        res.json({
            data,
            message:'Esto e slo que tengo',
        });
    }
    
    async GetById(req,res){
        const { userId } = req.params;
        const data = await _userService.GetById(userId);
        res.json({
            data,
            message:'Esto e slo que tengo',
        });
    }

    async Create(req,res){
        const user = req.body;
        const storedData = await _userService.Store(user);
        res.status(200)
        .json(
            {
                data:storedData,
                message:"Datos"
            }
        );
    }
}

export default UserController;