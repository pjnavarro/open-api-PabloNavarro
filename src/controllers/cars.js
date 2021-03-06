const {Cars} = include('models');
class CarsController  {
    static async fetch(req, res, next) {
        try {
            const cars = await Cars.find(req.query);
            res.send(cars);
        } catch (error) {
            next(error);
        }
    }

    static async fetchOne(req, res, next) {
        try {
            const cars = await Cars.findOne(req.params);
            res.send(persons);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Cars.insertOne(req.body);
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
            const result = await Cars.updateOne(req.params, req.body);
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
            const result = await Cars.deleteOne(req.params.id);
            res.send({
                success:true,
                result
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CarsController;