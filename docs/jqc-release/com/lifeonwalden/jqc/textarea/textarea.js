"use strict";!function(i){$JqcLoader.importCss($JqcLoader.getCmpParentURL("com.lifeonwalden.jqc","textarea").concat("css/textarea.css")).execute(function(){var e={title:"编辑",placeholder:"请输入内容...",cancelBtnText:"取消",saveBtnText:"保存",closeByModal:!1,beforeSave:function(t,e){e()}};i.jqcTextarea=function(t){if(Object.assign(this,e,t),!(this.el&&this.el instanceof i))throw new Error("jqcTextarea: el参数有误！");this.el.prop("readonly",!0).css("cursor","text"),function(){var e=this;this.el.click(function(t){e.edit()})}.call(this)},i.jqcTextarea.prototype.edit=function(){(function(t){var e=this;i(document).off("keyup.jqcTextareaESC"),this.mask=i("<div>").addClass("jqcTextarea-mask"),i("body").append(this.mask),this.editorBox=i("<div>").addClass("jqcTextarea-editorBox"),this.mask.append(this.editorBox),this.editorTitle=i("<div>").addClass("jqcTextarea-editorTitle").text(this.title),this.editorBox.append(this.editorTitle);var a=this.el.val();this.editor=i("<textarea>").addClass("jqcTextarea-editor").attr("placeholder",this.placeholder).val(a),this.editorBox.append(this.editor),this.footer=i("<div>").addClass("jqcTextarea-footer"),this.editorBox.append(this.footer),this.editor.focus(),this.cancelBtn=i("<button>").addClass("jqcTextarea-cancelBtn").text(this.cancelBtnText),this.saveBtn=i("<button>").addClass("jqcTextarea-saveBtn").text(this.saveBtnText),this.footer.append(this.cancelBtn,this.saveBtn),this.cancelBtn.click(function(){e.cancelEdit()}),this.saveBtn.click(function(){e.save()}),this.closeByModal?(this.mask.click(function(){e.cancelEdit()}),this.editorBox.click(function(t){t.stopPropagation(),e.editor.focus()})):this.mask.click(function(){e.editor.focus()});i(document).on("keyup.jqcTextareaESC",function(t){27==t.keyCode&&e.cancelEdit()})}).call(this)},i.jqcTextarea.prototype.cancelEdit=function(){this.mask&&this.mask.remove(),this.mask=null,i(document).off("keyup.jqcTextareaESC")},i.jqcTextarea.prototype.save=function(){var t=this,e="";this.editor&&(e=this.editor.val()),this.beforeSave(e,function(){t.el.val(e),t.cancelEdit()})}})}(jQuery);