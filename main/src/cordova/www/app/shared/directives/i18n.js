directives.directive('i18n', ['I18N', function (I18N) {
    return {
        priority: 0,
        restrict: 'A',
        scope: false,
        compile: function compile(tElement, tAttrs, transclude) {
            if (tAttrs.i18n) {
                tElement.text(I18N.translate(tAttrs.i18n));
            }
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {},
                post: function postLink(scope, iElement, iAttrs, controller) {}
            };
        }
    };
}]);