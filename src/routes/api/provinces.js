const {ProvincesController} = include ('controllers');

module.exports = router => {
    router.route('/')
        .get(ProvincesController.fetch);

    router.route('/:id')
        .put(ProvincesController.update);
    return router;
};



   