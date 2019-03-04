"use strict";!function(c){$JqcLoader.importComponents("com.lifeonwalden.jqc",["baseElement","icon","notification","toolkit"]).importCss($JqcLoader.getCmpParentURL("com.lifeonwalden.jqc","upload").concat("css/upload.css")).execute(function(){var a={image:"image/vnd.dwg,image/vnd.dxf,image/gif,image/jp2,image/jpeg,image/png,image/vnd.svf,image/tiff",word:"application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",excel:"application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",audio:"audio/*",video:"video/*",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",potx:"application/vnd.openxmlformats-officedocument.presentationml.template",ppsx:"application/vnd.openxmlformats-officedocument.presentationml.slideshow",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",sldx:"application/vnd.openxmlformats-officedocument.presentationml.slide",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",xlsm:"application/vnd.ms-excel.addin.macroEnabled.12",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.12","3gpp":"audio/3gpp, video/3gpp",ac3:"audio/ac3",asf:"allpication/vnd.ms-asf",au:"audio/basic",css:"text/css",csv:"text/csv",doc:"application/msword",dot:"application/msword",dtd:"application/xml-dtd",dwg:"image/vnd.dwg",dxf:"image/vnd.dxf",gif:"image/gif",htm:"text/html",html:"text/html",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript, application/javascript",json:"application/json",mp2:"audio/mpeg, video/mpeg",mp3:"audio/mpeg",mp4:"audio/mp4, video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",mpp:"application/vnd.ms-project",ogg:"application/ogg, audio/ogg",pdf:"application/pdf",png:"image/png",pot:"application/vnd.ms-powerpoint",pps:"application/vnd.ms-powerpoint",ppt:"application/vnd.ms-powerpoint",rtf:"application/rtf, text/rtf",svf:"image/vnd.svf",tif:"image/tiff",tiff:"image/tiff",txt:"text/plain",wdb:"application/vnd.ms-works",wps:"application/vnd.ms-works",xhtml:"application/xhtml+xml",xlc:"application/vnd.ms-excel",xlm:"application/vnd.ms-excel",xls:"application/vnd.ms-excel",xlt:"application/vnd.ms-excel",xlw:"application/vnd.ms-excel",xml:"text/xml, application/xml",zip:"aplication/zip"},e={el:"",url:"upload_component_expect_url",data:{},accept:[],mode:"single",name:"file",uploadBtnText:"上传数据",placeholder:"",selectFilesText:"选取文件",files:[],maxSize:0,check:function(i){return!0},success:function(i,e,t){e()},error:function(i,e){e()},onRemove:function(i,e,t){e()}};function o(i,e){var t=c('<input type="file">').addClass("jqcUpload-input");e&&t.prop("multiple",!0),"string"==typeof i&&(i=[i]);var o=[];i.forEach(function(i){a[i]&&o.push(a[i])});var n=o.join(",");return n&&t.attr("accept",n),t}c.jqcUpload=function(i){Object.assign(this,e,i),this.init()},c.jqcUpload.prototype.init=function(){if(!(this.el&&this.el instanceof c))throw new Error("jqcUpload: 缺少el容器！");if(this.files=[],this.container=c("<div>").addClass("jqcUpload-container"),this.btn=c("<button>").addClass("jqcUpload-btn").text(this.uploadBtnText),this.loading=c("<i>").addClass("el-icon-loading jqcUpload-loading"),this.btn.append(this.loading),this.inputMask=c("<div>").addClass("jqcUpload-input-mask"),this.el.append(this.container),this.mode=this.mode.toLowerCase(),"single"===this.mode)this.renderSlingleMode();else{if("multiple"!==this.mode)throw new Error("jqcUpload: 请设置正确的mode （single,multipe）");this.renderMultipleMode()}this.bindEvent()},c.jqcUpload.prototype.bindEvent=function(){var o=this;this.input.change(function(i,e){if("single"===o.mode)if(o.files=[],this.files.length){if(o.maxSize&&this.files[0].size>1024*o.maxSize)return c.jqcNotification({type:"error",title:"所选文件大小必须小于等于".concat(o.maxSize,"KB")}),void c(this).val("");o.icon.removeClass("el-icon-success el-icon-folder").addClass("el-icon-circle-close"),o._input.val(this.files[0].name),o.files.push(this.files[0]),o.files[0].uuid=c.jqcToolkit.uuid(20)}else o.clear();else this.files.length&&o.addFiles(this.files)}),this.btn.click(function(i,e){o.upload(!0)}),"multiple"==this.mode?this.container.on("click",".close",function(){if(!o.uploading){var e=c(this).attr("index"),i=o.files[e].result;o.onRemove(i,function(i){i&&c.jqcNotification({type:"success",title:i}),o.files.splice(e,1),o.fillFilesList()},function(i){i&&c.jqcNotification({type:"error",title:i})})}}):this.icon.click(function(i){var e=c(this);if(e.hasClass("el-icon-circle-close")||e.hasClass("el-icon-success")){var t=o.files[0].result;o.onRemove(t,function(i){i&&c.jqcNotification({type:"success",title:i}),o.clear()},function(i){i&&c.jqcNotification({type:"error",title:i})})}})},c.jqcUpload.prototype.upload=function(l){var p=this;return new Promise(function(t,e){if(!p.uploading){var o=new FormData,i=p.data;if("function"==typeof p.data&&(i=p.data()||{}),p.check(i)){for(var n in i)if(i.hasOwnProperty(n)){var a=i[n];"string"==typeof a&&(a=encodeURIComponent(a)),o.append(n,a)}var s=!1;if(p.files.forEach(function(i){i.hasUpload||(s=!0,o.append(p.name,i,encodeURIComponent(i.name+"_"+i.uuid)))}),!s)return l&&c.jqcNotification({type:"error",title:"请选择文件"}),void t();p.container.addClass("loading"),p.uploading=!0,p.input.prop("disabled",!0),c.ajax({type:"POST",url:p.url,dataType:"json",data:o,processData:!1,contentType:!1,success:function(i){p.success&&p.success(i,function(e){e||(e={}),l&&c.jqcNotification({type:"success",title:"上传成功"}),"single"==p.mode&&p.icon.removeClass("el-icon-circle-close").addClass("el-icon-success"),p.files.forEach(function(i){i.hasUpload=!0,e[i.uuid]&&(i.result=e[i.uuid])}),p.reset(),t()},function(i){c.jqcNotification({type:"error",title:"上传失败",content:i}),p.reset(!0),e()})},error:function(i){p.error&&p.error(i,function(i){c.jqcNotification({type:"error",title:"上传失败",content:i}),p.reset(!0),e()})}})}else p.reset(!0)}})},c.jqcUpload.prototype.renderSlingleMode=function(){console.log("single"),this.input=o(this.accept),this._input=c("<input>").attr("placeholder",this.placeholder).addClass("jqcUpload-file-name"),this.icon=c("<span>").addClass("el-icon-folder"),this.inputMask.append(this._input,this.icon,this.input),this.container.addClass("jqcUpload-single").append(this.inputMask,this.btn)},c.jqcUpload.prototype.renderMultipleMode=function(){console.log("multiple");var i=c("<div>").addClass("jqcUpload-header");this.input=o(this.accept,!0);var e=c("<span>").text(this.selectFilesText).addClass("jqcUpload-select-files");if(this.inputMask.append(e,this.input),i.append(this.inputMask,this.btn),this.container.addClass("jqcUpload-multiple").append(i),this.placeholder){var t=c("<p>").addClass("jqcUpload-placeholder").text(this.placeholder);this.container.append(t)}this.filesList=c("<div>").addClass("jqcUpload-files-list"),this.container.append(this.filesList)},c.jqcUpload.prototype.addFiles=function(i){for(var e=this,t=0;t<i.length;t++)e.maxSize&&i[t].size>1024*e.maxSize?c.jqcNotification({type:"error",title:"所选文件大小必须小于等于".concat(e.maxSize,"KB"),content:i[t].name}):this.files.unshift(i[t]);setTimeout(function(){e.fillFilesList(),e.input.val("")})},c.jqcUpload.prototype.fillFilesList=function(){this.filesList.empty();for(var i=0;i<this.files.length;i++){var e=c("<div>").addClass("jqcUpload-files-item"),t=c("<span>").addClass("el-icon-document"),o=c("<p>").text(this.files[i].name),n=c("<span>").addClass("close el-icon-").attr("index",i);this.files[i].hasUpload&&n.addClass("uploaded"),this.files[i].uuid||(this.files[i].uuid=c.jqcToolkit.uuid(20)),e.append(t,o,n),this.filesList.append(e)}},c.jqcUpload.prototype.reset=function(i){this.container.removeClass("loading"),this.uploading=!1,this.input.prop("disabled",!1),i||"single"==this.mode||(this.input.val(""),this.fillFilesList())},c.jqcUpload.prototype.clear=function(){this.container.removeClass("loading"),this.uploading=!1,this.input.prop("disabled",!1),this.files=[],"single"==this.mode?(this.input.val(""),this._input.val(""),this.icon.removeClass("el-icon-circle-close el-icon-success").addClass("el-icon-folder")):(this.input.val(""),this.fillFilesList())}})}(jQuery);