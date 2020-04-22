const {CarsController} = include ('controllers');

module.exports = router => {
    router.route('/')
        .get(CarsController.fetch);

    router.route('/:id')
        .put(CarsController.update);
    return router;
};



   