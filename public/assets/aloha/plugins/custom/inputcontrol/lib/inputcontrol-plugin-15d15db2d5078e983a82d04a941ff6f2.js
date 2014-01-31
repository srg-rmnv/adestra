/*!
* Aloha Editor
* Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Author Nicolas Karageuzian
* Licensed unter the terms of http://www.aloha-editor.com/license.html
# https://github.com/temistokles/Aloha-Plugin-InputControl
*/
define(["aloha/plugin","aloha"],function(e,t){"use strict";return e.create("inputcontrol",{_constructor:function(){this._super("inputcontrol")},init:function(){var e=this;e.bindEvents()},config:{enableFilter:!1,allowchars:new RegExp("."),enableMask:!1},bindEvents:function(){var e=this;t.bind("aloha-editable-created",function(n,r){var i=e.getEditableConfig(r.obj);i.enableFilter&&r.obj.keypress(function(e){var n,r=e.which,o=!0;return n=String.fromCharCode(r),i.allowchars instanceof RegExp&&(t.Log.debug(t,"Keycode : ["+r+"] char : '"+n+"'"),o=o&&i.allowchars.test(n)),o}),i.disableEnter&&(r.obj.unbind("keydown"),r.obj.keydown(function(e){return 13===e.keyCode?!1:!0})),i.enableMask&&r.obj.blur(function(){var e=$(this);return i.type===Number&&("NaN"===new Number(e.text()).toString()?e.addClass("aloha-input-invalid"):e.removeClass("aloha-input-invalid")),"number"==typeof i.maxlength&&(i.striphtml?e.text().length>=i.maxlength?e.addClass("aloha-input-invalid"):e.removeClass("aloha-input-invalid"):e.html().length>=i.maxlength?e.addClass("aloha-input-invalid"):e.removeClass("aloha-input-invalid")),!0})})}})});