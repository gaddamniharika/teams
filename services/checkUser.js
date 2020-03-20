var conn = require('../Database/db.js');
checkUser = (id) => {
    return new Promise((resolve,reject) => conn.query("SELECT id as sol FROM rate WHERE id = "+id,(err,result) =>
    {
    if(result[0] !== undefined)
        resolve("mysql error")
    resolve(false);
    }));
}
module.exports = checkUser;
