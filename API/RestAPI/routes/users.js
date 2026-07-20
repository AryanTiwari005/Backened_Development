import express from 'express';
import { createUser,getUser,getId,deleteUser, UserUpdated } from '../Controllers/users.js';

const router = express.Router();




router.get('/',getUser)

router.post('/',createUser)


router.get('/:id',getId)

router.delete('/:id',deleteUser)


router.patch('/:id',UserUpdated)


export default router;




