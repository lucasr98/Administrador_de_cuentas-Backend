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

router.get("/users/:accountId", getUsers);
router.post("/users/create/:accountId/:user/:password", createUser);
router.put("/users", updateUser);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);

router.get("/login/:user/:password", getAccount);
router.post("/signin", createAccount);
router.delete("/account/:id", deleteAccount);

export default router;