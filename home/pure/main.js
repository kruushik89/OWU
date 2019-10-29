/**
 * Created by Lenovo on 03.11.2017.
 */
YUI({
    classNamePrefix: 'pure'
}).use('gallery-sm-menu', function (Y) {

    var horizontalMenu = new Y.Menu({
        container		 : '#demo-horizontal-menu',
        sourceNode		: '#std-menu-items',
        orientation	   : 'horizontal',
        hideOnOutsideClick: false,
        hideOnClick	   : false
    });

    horizontalMenu.render();
    horizontalMenu.show();

});

