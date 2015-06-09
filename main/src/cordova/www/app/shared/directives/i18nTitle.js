directives.directive('i18nTitle', ['I18N', function (I18N) {
    return {
        priority: 0,
        restrict: 'A',
        scope: false,
        compile: function compile(tElement, tAttrs, transclude) {
            if (tAttrs.i18nTitle) {
                tAttrs.$set('title', I18N.translate(tAttrs.i18nTitle));
            }
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {},
                post: function postLink(scope, iElement, iAttrs, controller) {}
            };
        }
    };
}]);