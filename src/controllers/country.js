const {Country} = include('models');
class CountryController  {
    static async fetch(req, res, next) {
        try {
            const country = await Country.find(req.query);
            res.send(country);
        } catch (error) {
            next(error);
        }
    }

    static async fetchOne(req, res, next) {
        try {
            const country = await Country.findOne(req.params);
            res.send(country);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Country.insertOne(req.body);
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
            const result = await Country.updateOne(req.params, req.body);
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
            const result = await Country.deleteOne(req.params.id);
            res.send({
                success:true,
                result
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CountryController;
