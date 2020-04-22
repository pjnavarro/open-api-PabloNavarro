require('../../src/global');

const {Provinces} = include('/models');
const provinces = require('./provinces.json');

exports.seed = async knex => {
    await knex(Provinces.tableName).del(); /*sirve para borrar */
    try {
        await Provinces.startTransaction();
        await Promise.all(provinces.map(provinces => Provinces.insertOne(provinces))); /*maping de datos*/ 
        return Provinces.commitTransaction();
    }catch (err){
        console.log('err:', err); 
    }
}