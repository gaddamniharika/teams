var conn = require('../Database/db.js');
function insert(id,name,rating)
{
    return new Promise((resolve,reject) =>{
        conn.query("INSERT INTO rate (id,name,rating) Values ('"+id+"','"+name+"','"+rating+"')" ,(err) =>
        {
        if(err)
        {
            console.log(err);
            reject(err);
        }
        else
            resolve("data inserted");
        });      
    }
);
}
module.exports = insert;