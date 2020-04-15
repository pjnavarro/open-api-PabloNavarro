const ModelCreate = include ('helpers/modelCreate');

const tableName = 'clubes';
const name = 'Clubes';
const selectableProps = [
    'id',
    'name',
    'iso2',
    'code',
    'deleted'
];

class Clubes extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });
    }
}
module.exports = knex => new Clubes({knex});