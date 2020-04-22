const {Clubes} = include('models');
class ClubesController  {
    static async fetch (req, res, next){
        try{
            const clubes = await Clubes.find(req.query);
            res.send(clubes);
        } catch (error) {
            next (error);
        }
    }
    static async update (req, res, next){
        try {
            const result = await Clubes.updateOne({id: req.params.id}, req.body);
            res.send(result);
        } catch (error) {
            next (error);
        }
    }
}

module.exports = ClubesController;


