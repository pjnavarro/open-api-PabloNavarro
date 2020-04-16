const {ClubesController} = include ('controllers');

module.exports = router => {
    router.route('/')
    .get(ClubesController.fetch)
    .put(ClubesController.update);
    return router;
};

