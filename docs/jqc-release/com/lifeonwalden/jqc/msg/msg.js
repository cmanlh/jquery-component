"use strict";!function(l){$JqcLoader.importComponents("com.lifeonwalden.jqc",["baseElement","uniqueKey","lang"]).importCss($JqcLoader.getCmpParentURL("com.lifeonwalden.jqc","msg").concat("css/msg.css")).execute(function(){var s={element:null,data:[],speed:20,adapter:{text:"text"},onSelect:null};function i(t){var s=this,i=this.options.adapter.text,e=l("<span>").attr("title",l.jqcLang.CLOSE).addClass("jqcMsg-close"),o=l("<div>").addClass("jqcMsg-item").text(t[i]).append(e);o.data("bindData",t);var a=s.scrollBox.outerWidth();s.scrollBox.append(o).width(a+o.outerWidth()+s.msgBoxGap)}function e(t){var s=this;if(!(1<arguments.length&&void 0!==arguments[1])||arguments[1]){var i=s.scrollBox.outerWidth(),e=t.outerWidth();t.remove(),s.scrollBox.width(i-e-s.msgBoxGap),o.call(s)}}function o(){var t=this;window.cancelAnimationFrame(t.aid),t.el.width()<t.scrollBox.outerWidth()?t.animate():(t.frame=(t.el.width()-t.scrollBox.outerWidth())/2,t.scrollBox.css("left",t.frame))}l.jqcMsg=function(t){this.options=Object.assign({},s,t),this.el=this.options.element,this.frame=0,this.aid=0,this.msgBoxGap=5,this.lastTimeStamp=0,function(){if(!this.el)throw new Error("jqcMsg: element expect a jquery object.");var s=this;this.scrollBox=l("<div>").addClass("jqcMsg-scrollBox"),this.el.addClass("jqcMsg-box").append(this.scrollBox),this.options.data.forEach(function(t){i.call(s,t)})}.call(this),this.animate=function(t){var s=this;if(t-this.lastTimeStamp>this.options.speed){if(this.frame-=1,this.frame<=-1*this.scrollBox.outerWidth())return this.frame=this.scrollBox.outerWidth()/2,void this.scrollBox.css("left",s.frame);var i=this.scrollBox.find(".jqcMsg-item").first();Math.abs(this.scrollBox.position().left)>i.outerWidth()&&(this.scrollBox.append(i),this.frame+=i.outerWidth()),this.lastTimeStamp=t,this.scrollBox.css("left",s.frame)}s.aid=window.requestAnimationFrame(s.animate)}.bind(this),o.call(this),function(){var i=this;this.el.off(),this.el.on("mouseenter",function(t){window.cancelAnimationFrame(i.aid)}).on("mouseleave",function(t){o.call(i)}).on("click",".jqcMsg-item",function(t){var s=l(t.target);s.hasClass("jqcMsg-item")?i.options.onSelect(s.data("bindData"),e.bind(i,s)):s.hasClass("jqcMsg-close")&&e.call(i,s.parent(),!0),t.stopPropagation()})}.call(this)},l.jqcMsg.prototype.add=function(t){var s=this;if(!t)throw new Error("$.jqcMsg add function argument expect Array or Object.");Array.isArray(t)&&t.forEach(function(t){i.call(s,t)}),"Object"==typeof t&&i.call(s,t),o.call(this)}})}(jQuery);