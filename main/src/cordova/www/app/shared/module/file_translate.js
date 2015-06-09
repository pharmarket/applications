angular.module('App.I18N', [], function($provide) {
    $provide.factory('I18N', I18NFactory);
});

function I18NFactory() {
    var labels = {
        'init.start': "Initialisation de l'application.",
        'init.footer': "Texte de bas de page en français.",
        'global.backToList': "Retour à la liste",
        'global.loading': "Chargement des données..."
    };
    return {
        translate: function (id, text) {
            var text = labels[id];
            return text ? text : '*Traduction introuvable*';
        }
    };
}