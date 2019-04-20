import express from 'express';
import UserController from '../../controllers/user.controller';

const userController = new UserController();
const router = express.Router();

router.get('/', userController.GetAll);

router.get('/:userId', userController.GetById);


export default router;