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
            const clubupdate = await Clubes.find(req.query);
            Object.assign(clubupdate, req.body)
            res.sendStatus(200)
        } catch (error) {
            next (error)
        }
    }
}

module.exports = ClubesController;


