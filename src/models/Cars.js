const ModelCreate = include ('helpers/modelCreate');

const tableName = 'cars';
const name = 'Cars';
const selectableProps = [
    'id',
    'name',
    'iso2',
    'code',
    'deleted'
];

class Cars extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });
    }
}
module.exports = knex => new Cars({knex});