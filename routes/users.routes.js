import { Router } from 'express';
import {

	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	getAccount,
	createAccount,
	deleteAccount

} from '../controllers/users.controllers.js';

const router = Router();
const URL = "https://administrador-de-cuentas-backend-o876u6ueg-lucasr98.vercel.app";

router.get(`${URL}/users/:accountId`, getUsers);
router.post(`${URL}/users/create/:accountId/:user/:password`, createUser);
router.put(`${URL}/users`, updateUser);
router.get(`${URL}/users/:id`, getUser);
router.delete("${URL}/users/:id", deleteUser);

router.get(`${URL}/login/:user/:password`, getAccount);
router.post(`${URL}/signin`, createAccount);
router.delete(`${URL}/account/:id`, deleteAccount);

export default router;