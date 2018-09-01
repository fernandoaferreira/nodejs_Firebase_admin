let contato = (app) => {

    let firebase = app.firebase;
    return firebase.database().ref('contato');

};
module.exports = contato;