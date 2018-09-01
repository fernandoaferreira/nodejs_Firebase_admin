module.exports = function(app) {

    let controller = app.controllers.contatosCtrl;

    app.get('/', controller.index);

    app.get('/new', controller.new);

    app.post('/new', controller.newPost);

    app.get('/ver/:id', controller.ver);

    app.get('/edit/:id', controller.edit);

    app.post('/edit/:id', controller.editpost);

    app.get('/remove/:id', controller.remove);
}