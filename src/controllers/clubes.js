const {Clubes} = include('models');
class ClubesController  {
    static async fetch(req, res, next) {
        try {
            const clubes = await Clubes.find(req.query);
            res.send(clubes);
        } catch (error) {
            next(error);
        }
    }

    static async fetchOne(req, res, next) {
        try {
            const clubes = await Clubes.findOne(req.params);
            res.send(clubes);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Clubes.insertOne(req.body);
            res.send({
                success:true,
                result
            });
        } catch (error) {
            next(error);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Clubes.updateOne(req.params, req.body);
            res.send({
                success:true,
                result
            });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const result = await Clubes.deleteOne(req.params.id);
            res.send({
                success:true,
                result
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ClubesController;


