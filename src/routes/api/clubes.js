const {ClubesController} = include ('controllers');

module.exports = router => {

    router.route('/')
        .get(ClubesController.fetch)
        .post(ClubesController.create);

    router.route('/:id')
        .get(ClubesController.fetchOne)
        .put(ClubesController.save)
        .delete(ClubesController.delete);

    return router;
};
