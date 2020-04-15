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
}

module.exports = ClubesController;