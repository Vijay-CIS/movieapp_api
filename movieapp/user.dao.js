const pool = require('../config/database')

class UserDAO {
    
   
    async findAll(){
        const result = await pool.query("select id,name,email,role from movieapp_users");    
        return result[0];
    }

    async login(email,password){
        const result = await pool.query("select id,name,email,role from movieapp_users where email = ? and password = ?",[email,password]);    
        return result[0].length>0 ? result[0][0]: null;
    }


    async findByEmail(email){
        const result = await pool.query("select id,name,email,role,password from movieapp_users where email = ? ",[email]);    
        return result[0].length>0 ? result[0][0]: null;
    }

    async save(user){
        const role = user.role ?? "USER";
        let params = [ user.name,user.email, user.password, role];
        const result = await pool.query("insert into movieapp_users (name,email,password,role) values ( ?,?,?,?)", params);    
        return result[0].insertId;        
    }

}

exports.UserDAO = UserDAO;