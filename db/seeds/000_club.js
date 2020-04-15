require('../../src/global');

const {Clubes} = include ('/models');
const clubes = require ('./clubes.json');
exports.seed= async knex => {
    await knex (Clubes.tableName).del();
    try{
        await Clubes.startTransaction();
        await Promise.all(clubes.map(clubes => Clubes.insertOne(clubes)));
        return Clubes.commitTransaction();
    } catch(err){
        console.log('err: ', err);
    }
}