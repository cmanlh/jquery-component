"use strict";!function(f){$JqcLoader.importComponents("com.lifeonwalden.jqc",["baseElement","uniqueKey","lang","zindex","icon"]).importCss($JqcLoader.getCmpParentURL("com.lifeonwalden.jqc","menuTree").concat("css/menuTree.css")).execute(function(){window.innerHeight;var i={data:null,speed:200,width:200,position:"fixed",top:0,left:0,autoHide:!0,adapter:{id:"id",label:"label",child:"child"},configBoxWidth:500,displayed:!0,allowedConfig:!1,autoSkip:!0,triggerFirst:!1,configurableMenuData:null,onResettingMenu:null,onSelect:null,onHide:null,onShow:null};function u(t){var e=this;this.mainMenu&&this.mainMenu.remove(),e.mainMenu=l.call(e,t),e.scrollbox.append(e.mainMenu)}function l(t){var a=this,s=f("<ul>").addClass("jqcMenuTree-item").css("width",a.options.width);return t.forEach(function(t,e,i){var n=t[a.options.adapter.id];a.avavilable&&a.avavilable[n]&&s.append(function(t){var e=this,i=this.options.adapter.label,n=this.options.adapter.id,a=e.options.adapter.child,s=f("<li>"),o=this.options.autoSkip?function t(e){var i=this;var n=this.options.adapter.child;var a=this.options.adapter.id;if(!e.hasOwnProperty(n)||!Array.isArray(e[n])||0===e[n].length)return e;var s=e[n].filter(function(t){return i.avavilable[t[a]]});var o=s.length;if(2<=o)return e;if(1===o)return t.call(i,s[0])}.call(e,t):t,c=f("<div>");c.text(o[i]).attr("title",o[i]),s.append(c),s.attr("menuId",o[n]),o[a]&&0<o[a].length?(s.addClass("hasChild"),s.append(l.call(e,o[a]))):(s[0].data=o,s.addClass("jqcMenuTree-available"));return s}.call(a,t))}),s}function r(t,n){var a=this,s=f("<ul>").addClass("jqcMenuTree-settingItem");return Array.isArray(t)?t.forEach(function(t,e,i){s.append(o.call(a,t,n))}):s.append(o.call(a,t,n)),s}function o(t,e){var i=f("<li>"),n=this.options.adapter.label,a=this.options.adapter.child,s=t[this.options.adapter.id],o=f("<div>").attr("data-menuId",s).text(t[n]),c=f('<input type="checkbox" data-id='.concat(s,">"));this.avavilable[s]&&(c.prop("checked",!0),o.addClass("checked"));var l=f("<span>");return o.append(c,l),i.append(o),t[a]&&0<t[a].length?(i.append(r.call(this,t[a],s)),o.addClass("hasChild")):o[0].data=t,i}f.jqcMenuTree=function(t){var e=this;this.display=!1,this.avavilable={},0<arguments.length&&f.jqcBaseElement.apply(this,arguments),this.options=f.extend(!0,{},i,t),this.data=t.configurableMenuData&&t.allowedConfig?[].concat(t.configurableMenuData):[].concat(t.data),this.typeName="jqcMenuTree",this.elementId="jqc".concat(f.jqcUniqueKey.fetchIntradayKey()),function e(t){var i=this;var n=this.options.adapter.child;var a=this.options.adapter.id;t.forEach(function(t){i.avavilable[t[a]]=!0,t[n]&&e.call(i,t[n])})}.call(this,this.options.data),function(){var t=this;t.container=f("<div>").addClass("jqcMenuTree").css({position:t.options.position,width:t.options.width,height:window.innerHeight-t.options.top,top:t.options.top,left:20-t.options.width,"z-index":f.jqcZindex.menu}),f("body").append(t.container),this.scrollbox=f("<div>").addClass("jqcMenuTree-scrollbox"),this.fakeScrollBox=f("<div>").addClass("jqcMenuTree-fakeScroll"),this.fakeScrollBox.append(this.scrollbox),this.switch=f("<div>").addClass("jqcMenuTree-switch"),this.ban=f("<div>").addClass("jqcMenuTree-limit"),this.container.append(this.fakeScrollBox,this.switch,this.ban),this.options.allowedConfig&&this.options.configurableMenuData&&(this.settingSwitch=f("<span>").addClass("jqcMenuTree-settingSwitch"),this.container.append(t.settingSwitch).addClass("jqcMenuTree-canSetting"),this.settingSwitch.click(function(){t.isSetting?(t.setttingContainer.remove(),t.setttingContainer=null):function(){var p=this;p.settingPanel=f("<div>").addClass("jqcMenuTree-settingPanel"),p.options.configurableMenuData.forEach(function(t,e,i){p.settingPanel.append(r.call(p,t))});var t=f("<div>").addClass("setting-title").text("菜单管理"),e=f("<div>").addClass("setting-close");t.append(e),this.setttingContainer=f("<div>").addClass("jqcMenuTree-setttingContainer"),this.setttingContainer.append(t,this.settingPanel),this.container.append(this.setttingContainer),p.settingPanel.on("click.jqcMenuTree","div",function(t){f(this).hasClass("hasChild")||(e.trigger("click"),p.options.onSelect&&p.options.onSelect(this.data))}),p.settingPanel.on("click.jqcMenuTree-input","input",function(t){t.stopPropagation()}),e.click(function(t){t.stopPropagation(),p.isSetting=!1,p.setttingContainer.remove(),p.setttingContainer=null}),p.settingPanel.on("change.jqcMenuTree","input",function(t){var e=f(this).prop("checked"),i=f(this).parent().parent();i.find("input").prop("checked",e);var n=i.parents("li:first"),a=n.parents("li:first");if(e)f(this).parent().addClass("checked"),n.find("input").eq(0).prop("checked",e),a.find("input").eq(0).prop("checked",e);else{f(this).parent().removeClass("checked");for(var s=n.find("input"),o=!1,c=1;c<s.length;c++){var l=s[c];o=!!l.checked||o}s.eq(0).prop("checked",o);for(var r=a.find("input"),d=!1,h=1;h<r.length;h++){var l=r[h];d=!!l.checked||d}r.eq(0).prop("checked",d)}(function(){for(var i=this,t=this.settingPanel.find("input"),e=0;e<t.length;e++){var n=t[e],a=f(n).attr("data-id"),s=f(n).prop("checked");i.avavilable[a]=s}setTimeout(function(){var t=[];for(var e in i.avavilable)i.avavilable[e]&&t.push(e);u.call(i,i.options.configurableMenuData),i.options.onResettingMenu&&(clearTimeout(i.afterSetting),i.afterSetting=setTimeout(function(){i.options.onResettingMenu(t)},3e3))},50)}).call(p)})}.call(t),t.isSetting=!t.isSetting}))}.call(this),function(){var i=this;this.options.autoHide&&(this.container.on("mouseleave.jqcMenuTree",function(){i.isSetting||(i.debounceHandle=setTimeout(function(){i.hide()},600))}),this.container.on("mouseenter.jqcMenuTree",function(){i.debounceHandle&&clearTimeout(i.debounceHandle)}));this.container.on("click","li",function(t){t.stopPropagation();var e=f(this).children("ul");e.is(":visible")?(e.slideUp(100),f(this).removeClass("active")):(f(this).addClass("active"),e.slideDown(100)),f(this).siblings().children("ul").slideUp(100),f(this).siblings().removeClass("active"),this.data&&i.options.onSelect&&i.options.onSelect.call(i,this.data)}),this.container.on("mouseenter.jqcMenuTree-limit",function(){i.show()}),f(window).on("resize.jqcMenuTree",function(){i.container.css("height",this.innerHeight)}),i.options.displayed&&i.show();this.switch.click(function(t){i.display?i.hide():i.show()})}.call(this),u.call(this,this.data),t.triggerFirst&&setTimeout(function(){e.container.find(".jqcMenuTree-available").eq(0).trigger("click")},500)},f.jqcMenuTree.prototype=new f.jqcBaseElement,f.jqcMenuTree.prototype.constructor=f.jqcMenuTree,f.jqcMenuTree.prototype.show=function(){var t=this;this.switch.hasClass("active")||("fixed"==this.options.position?this.container.animate({left:this.options.left},this.options.speed,function(){t.display=!0}):this.container.fadeIn(),this.switch.addClass("active"),this.options.onShow&&this.options.onShow(t.options.width,t.options.speed))},f.jqcMenuTree.prototype.hide=function(){var t=this;"fixed"==this.options.position?this.container.animate({left:-1*this.options.width-this.options.left+20},this.options.speed,function(){t.display=!1}):this.container.fadeOut(),this.switch.removeClass("active"),this.options.onHide&&this.options.onHide(t.options.width,t.options.speed),this.isSetting&&this.settingSwitch.trigger("click")},f.jqcMenuTree.prototype.destroyed=function(){f(window).off("resize.jqcMenuTree")}})}(jQuery);