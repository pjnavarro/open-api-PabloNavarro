const {ProvincesController} = include ('controllers');

module.exports = router => {

    router.route('/')
        .get(ProvincesController.fetch)
        .post(ProvincesController.create);

    router.route('/:id')
        .get(ProvincesController.fetchOne)
        .put(ProvincesController.save)
        .delete(ProvincesController.delete);

    return router;
};

   