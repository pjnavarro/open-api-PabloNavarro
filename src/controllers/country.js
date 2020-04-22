const {Country} = include('models');
class CountryController  {
    static async fetch (req, res, next){
        try{
            const country = await Country.find(req.query);
            res.send(country);
        } catch (error) {
            next (error);
        }
    }
    static async update (req, res, next){
        try {
            const result = await Country.updateOne({id: req.params.id}, req.body);
            res.send(result);
        } catch (error) {
            next (error);
        }
    }
}

module.exports = CountryController;
