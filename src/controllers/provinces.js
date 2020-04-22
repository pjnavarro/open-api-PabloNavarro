const {Provinces} = include('models');
class ProvincesController  {
    static async fetch (req, res, next){
        try{
            const provinces = await Provinces.find(req.query);
            res.send(provinces);
        } catch (error) {
            next (error);
        }
    }
    static async update (req, res, next){
        try {
            const result = await Provinces.updateOne({id: req.params.id}, req.body);
            res.send(result);
        } catch (error) {
            next (error);
        }
    }
}

module.exports = ProvincesController;
