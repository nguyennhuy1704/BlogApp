import express from 'express'
import auth from '../middleware/auth'
import userCtrl from '../controllers/userCtrl'
import { validRegister } from '../middleware/valid'

const router = express.Router()

router.patch('/user', auth, userCtrl.updateUser)

export default router;
