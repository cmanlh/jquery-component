"use strict";!function(s){$JqcLoader.importComponents("com.lifeonwalden.jqc",["baseElement","uniqueKey","valHooks","selectbox"]).importCss($JqcLoader.getCmpParentURL("com.lifeonwalden.jqc","formToolBar").concat("css/formToolBar.css")).execute(function(){var i={element:null,conditionHtml:null,controlHtml:null,height:50,background:"#fff",afterRender:null,onResize:null,onChange:null};s.jqcFormToolBar=function(o){var t=this;this.options=Object.assign({},i,o),this.el=this.options.element,this.status="fold",function(){var o=this;if(this.box=s("<div>").addClass("jqcFormToolBar").append(function(){return this.conditionBox=s("<div>").addClass("jqcFormToolBar-conditionBox"),this.switch=s("<div>").addClass("jqcFormToolBar-conditionBox-switch"),this.conditionBox.append(this.switch),this.options.conditionHtml&&this.conditionBox.append(s(this.options.conditionHtml)),this.conditionBox}.call(o)).append(function(){return this.controlBox=s("<div>").addClass("jqcFormToolBar-controlBox"),this.options.controlHtml&&this.controlBox.append(s(this.options.controlHtml)),this.controlBox}.call(o)).css({background:o.options.background,"min-height":o.options.height}),this.el.append(o.box),this.box.height()>o.options.height){this.box.addClass("jqcFormToolBar-newline");var t=this.conditionBox.height();t>this.options.height&&(this.conditionBox.addClass("showmore-visible").height(this.options.height),this.height=t)}}.call(t),function(){var o=this;s(window).resize(function(){o.resize()}),this.switch.click(function(){"fold"===o.status?o.spread():o.fold()})}.call(t),setTimeout(function(){t.options.afterRender&&t.options.afterRender.call(t),t.resize()},0)},s.jqcFormToolBar.prototype=new s.jqcBaseElement,s.jqcFormToolBar.prototype.constructor=s.jqcFormToolBar,s.jqcFormToolBar.prototype.fold=function(){var t=this;"fold"!==this.status&&(t.switch.removeClass("active"),t.conditionBox.animate({height:t.options.height},50,function(){t.status="fold";var o=t.box.outerHeight();t.options.onChange&&t.options.onChange(o)}))},s.jqcFormToolBar.prototype.spread=function(){var t=this;"spread"!==this.status&&(t.switch.addClass("active"),t.conditionBox.animate({height:t.height},50,function(){t.status="spread";var o=t.box.outerHeight();t.options.onChange&&t.options.onChange(o)}))},s.jqcFormToolBar.prototype.resize=function(){var i=this;if(this.box.removeClass("jqcFormToolBar-newline"),this.conditionBox.removeClass("showmore-visible"),i.conditionBox.height("auto"),this.box.height()>i.options.height){this.box.addClass("jqcFormToolBar-newline");var o=this.conditionBox.height();o>this.options.height&&(this.height=o,this.conditionBox.addClass("showmore-visible").height(this.options.height),this.fold())}else this.conditionBox.removeClass("showmore-visible");this.options.onResize&&this.box.is(":visible")&&setTimeout(function(){var o=i.box.outerHeight(),t=parseInt(i.box.css("margin-bottom"));i.options.onResize(o+t)},0)}})}(jQuery);