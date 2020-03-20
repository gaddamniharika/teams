var conn =  require('../Database/db.js');
var finding_teams =  require('./teams.js');

average = (teams) => {
    return new Promise((resolve,reject) => {
    conn.query("select id,rating from rate order by(rating)",async(err,result)=>{
    if(result)
    {
        teams_result = await finding_teams(result,teams);
        resolve(teams_result);
    }
    reject("columns not found");

    });
    });
}
module.exports = average;