import { pool } from '../db.js';

export const getUsers = async (req, res)=>{
	try{
		const [result] = await pool.query("SELECT * FROM usuarios WHERE accountId = ? ORDER BY id DESC", [
			req.params.accountId
		]);
		res.json(result);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}

export const getUser = async (req, res)=>{
	try{
		const [result] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [ req.params.id ]);

		if(result.length === 0){
			return res.status(404).json({
				message: "Usuario no encontrado."
			});
		}

		res.json(result[0]);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}

export const createUser = async (req, res)=>{
	try{

		const [result] = await pool.query('INSERT INTO usuarios(accountId, user, password) VALUES (?, ?, ?)', [
			req.params.accountId,
			req.params.user,
			req.params.password
		]);

		console.log(result)

		res.json(result);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}

export const updateUser = async (req, res)=>{
	try{
		const parametros = req.body;
		const [result] = await pool.query("UPDATE usuarios SET ? WHERE id = ?", [
			parametros[0],
			parametros[1]
		]);
		res.json(result);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}

export const deleteUser = async (req, res)=>{
	try{
		const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [
			req.params.id
		])

		if(result.affectedRows === 0){
			return res.sendStatus(404).json({
				message: "Usuario no encontrado."
			});
		}

		return res.sendStatus(204);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}

/*
export const getAccounts = async (req, res)=>{
	try{
		const [result] = await pool.query("SELECT * FROM cuentas ORDER BY id DESC");
		res.json(result);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}
*/

export const getAccount = async (req, res)=>{

	try{

		//const { user, password } = req.body;
		const [result] = await pool.query("SELECT * FROM cuentas WHERE user = ? AND password = ?", [
			req.params.user,
			req.params.password
		]);

		console.log(result)

		if(result.length === 0){
			return res.json({
				message: "Los datos que ingresaste no son correctos."
			});
		}

		res.json(result);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}

}

export const createAccount = async (req, res)=>{

	function capitalizarLetra(string){
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}

	try{

		const { user, password, email, name, lastName, genre } = req.body;

		const [result2] = await pool.query('SELECT * FROM cuentas WHERE user = ?', [user]);

		if(result2.length > 0){

			return res.json({
				message: "Ya existe un cuenta con ese nombre de usuario."
			});

		}

		const [result] = await pool.query('INSERT INTO cuentas(user, password, email, name, lastName, genre) VALUES (?, ?, ?, ?, ?, ?)', [
			user,
			password,
			email,
			capitalizarLetra(name),
			capitalizarLetra(lastName),
			genre
		]);

		console.log(result)

		res.json(result);

	}
	catch (error){
		console.log(error.message)
		return res.status(500).json({
			message: error.message
		});
	}
}

export const deleteAccount = async (req, res)=>{
	try{

		/*
		const [result2] = await pool.query('DELETE FROM usuarios WHERE accountId IN ?', [user]);

		if(result2.length > 0){

			return res.json({
				message: "Ya existe un cuenta con ese nombre de usuario."
			});

		}
		*/

		const [result] = await pool.query("DELETE FROM cuentas WHERE id = ?", [
			req.params.id
		])

		if(result.affectedRows === 0){
			return res.sendStatus(404).json({
				message: "Usuario no encontrado."
			});
		}

		return res.sendStatus(204);
	}
	catch (error){
		return res.status(500).json({
			message: error.message
		});
	}
}