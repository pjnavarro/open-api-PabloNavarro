const {CountryController} = include ('controllers');

module.exports = router => {
    router.route('/')
        .get(CountryController.fetch);

    router.route('/:id')
        .put(CountryController.update);
    return router;
};



   