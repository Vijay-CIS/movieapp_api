const bcrypt = require('bcryptjs');

class Util {   

    static async getHashPassword(password){
        return await bcrypt.hash(password, 10)
    }

    static async comparePassword(plainText,hashPassword) {
        return await bcrypt.compare(plainText, hashPassword)
    }
}

exports.Util = Util;