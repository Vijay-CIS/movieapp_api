const pool = require('../config/database')

class MovieDAO {
    
    static async findAll(){
        const result = await pool.query("select id,title,image_url as imageUrl, language,price from movieapp_movies");    
        return result[0];
    }

    static async findOne(id){
        const result = await pool.query("select id,title,image_url as imageUrl, language,price from movieapp_movies where id = ?",[id]);    
        return result[0].length>0? result[0][0]:null;
    }

    static async save(movie){
       
        let params = [ movie.title, movie.imageUrl, movie.language, movie.price];
        const result = await pool.query("insert into movieapp_movies (title,image_url,language,price) values ( ?,?,?,?)", params);    
        return result[0].insertId;        
    }
    static async delete(movieId){
       
        let params = [ movieId];
        const result = await pool.query("delete from movieapp_movies where id = ?", params);    
        return result[0].affectedRows;        
    }


}

exports.MovieDAO = MovieDAO;