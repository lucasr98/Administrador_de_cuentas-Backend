import {createPool} from 'mysql2/promise';

export const pool = createPool(
	/*
	{
		host: "localhost",
		port: 3306,
		user: "root",
		password: "",
		database: "administrador_de_contraseñas"
	}
	*/

	{
		database: "form_express",
		user: "iqihoiyckf0zixnh071l",
		host: "us-east.connect.psdb.cloud",
		password: "pscale_pw_Ds8yd1C5daJWJznsPhlpjWQ0GuDEBwBjKkT3cb41LzG",
		ssl: {
			rejectUnauthorized: false
		}
	}

)