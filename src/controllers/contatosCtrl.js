module.exports = function(app) {

    let contatoService = require("../services/contatoService")(app);

    return {
        index: (req, res) => {
            contatoService.on('value', (snapshot) => {
                res.render('index', {contatos: snapshot.val() || []});
            })
        },

        new: (req, res) => {
            res.render('new')
        },

        newPost: (req, res) => {
            let novoContato = contatoService.push();
            novoContato.set({
                nome: req.body.nome,
                email: req.body.email
            });
            res.redirect('/');
        },

        ver: (req, res) => {
            console.log(req);
            let child = contatoService.child(req.params.id);
            child.on('value', (snapshot) => {
                res.render('ver', {id: req.params.id, contatos: snapshot.val() || []});
            })
            console.log(child);
        },
        edit: (req, res) => {
            console.log(req);
            let child = contatoService.child(req.params.id);
            child.on('value', (snapshot) => {
                res.render('edit', {id: req.params.id, contatos: snapshot.val() || []});
            })
        },
        editpost: (req, res) => {
            let child = contatoService.child(req.params.id);
            child.update({
                nome: req.body.nome,
                email: req.body.email
            });
            res.redirect('/');
        },
        remove: (req, res) => {
            let child = contatoService.child(req.params.id);
            child.set(null, () => {
                res.redirect('/');
            });
        }
    }
}