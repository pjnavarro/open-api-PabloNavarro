const {ClubesController} = include ('controllers');

module.exports = router => {
    router.route('/')
        .get(ClubesController.fetch);

    router.route('/:id')
        .put(ClubesController.update);
    return router;
};



   