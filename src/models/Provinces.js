const ModelCreate = include ('helpers/modelCreate');

const tableName = 'provinces';
const name = 'Provinces';
const selectableProps = [
    'id',
    'name',
    'iso2',
    'code',
    'deleted'
];

class Provinces extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });
    }
}
module.exports = knex => new Provinces({knex});