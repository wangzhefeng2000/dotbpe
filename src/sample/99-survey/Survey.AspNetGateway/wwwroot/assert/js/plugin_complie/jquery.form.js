(function(b){function l(){b.fn.ajaxSubmit.debug&&window.console&&window.console.log&&window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}b.fn.ajaxSubmit=function(a){function f(){function d(){if(!n++){m.detachEvent?m.detachEvent("onload",d):m.removeEventListener("load",d,!1);var a=0,f=!0;try{if(o)throw"timeout";var g,h;h=m.contentWindow?m.contentWindow.document:m.contentDocument?m.contentDocument:m.document;if(h.body==null&&!a&&b.browser.opera){a=1;n--;setTimeout(d,100);return}j.responseText=
h.body?h.body.innerHTML:null;j.responseXML=h.XMLDocument?h.XMLDocument:h;j.getResponseHeader=function(a){return{"content-type":c.dataType}[a]};if(c.dataType=="json"||c.dataType=="script"){var i=h.getElementsByTagName("textarea")[0];j.responseText=i?i.value:j.responseText}else if(c.dataType=="xml"&&!j.responseXML&&j.responseText!=null)j.responseXML=e(j.responseText);g=b.httpData(j,c.dataType)}catch(q){f=!1,b.handleError(c,j,"error",q)}f&&(c.success(g,"success"),k&&b.event.trigger("ajaxSuccess",[j,
c]));k&&b.event.trigger("ajaxComplete",[j,c]);k&&!--b.active&&b.event.trigger("ajaxStop");c.complete&&c.complete(j,f?"success":"error");setTimeout(function(){l.remove();j.responseXML=null},100)}}function e(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&b.documentElement.tagName!="parsererror"?b:null}var f=h[0];if(b(":input[name=submit]",f).length)alert('Error: Form elements must not be named "submit".');
else{var c=b.extend({},b.ajaxSettings,a),g=jQuery.extend(!0,{},b.extend(!0,{},b.ajaxSettings),c),i="jqFormIO"+(new Date).getTime(),l=b('<iframe id="'+i+'" name="'+i+'" />'),m=l[0];if(b.browser.msie||b.browser.opera)m.src='javascript:false;document.write("");';l.css({position:"absolute",top:"-1000px",left:"-1000px"});var j={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=
1;l.attr("src","about:blank")}},k=c.global;k&&!b.active++&&b.event.trigger("ajaxStart");k&&b.event.trigger("ajaxSend",[j,c]);if(g.beforeSend&&g.beforeSend(j,g)===!1)g.global&&jQuery.active--;else if(!j.aborted){var n=0,o=0;if(g=f.clk){var p=g.name;if(p&&!g.disabled&&(a.extraData=a.extraData||{},a.extraData[p]=g.value,g.type=="image"))a.extraData[name+".x"]=f.clk_x,a.extraData[name+".y"]=f.clk_y}setTimeout(function(){var e=h.attr("target"),g=h.attr("action");h.attr({target:i,method:"POST",action:c.url});
a.skipEncodingOverride||h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});c.timeout&&setTimeout(function(){o=!0;d()},c.timeout);var j=[];try{if(a.extraData)for(var k in a.extraData)j.push(b('<input type="hidden" name="'+k+'" value="'+a.extraData[k]+'" />').appendTo(f)[0]);l.appendTo("body");m.attachEvent?m.attachEvent("onload",d):m.addEventListener("load",d,!1);f.submit()}finally{h.attr("action",g),e?h.attr("target",e):h.removeAttr("target"),b(j).remove()}},10)}}}if(!this.length)return l("ajaxSubmit: skipping submit process - no element selected"),
this;typeof a=="function"&&(a={success:a});var a=b.extend({url:this.attr("action")||window.location.toString(),type:this.attr("method")||"GET"},a||{}),d={};this.trigger("form-pre-serialize",[this,a,d]);if(d.veto)return l("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&a.beforeSerialize(this,a)===!1)return l("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var e=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(var c in a.data)if(a.data[c]instanceof
Array)for(var i in a.data[c])e.push({name:c,value:a.data[c][i]});else e.push({name:c,value:a.data[c]})}if(a.beforeSubmit&&a.beforeSubmit(e,this,a)===!1)return l("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[e,this,a,d]);if(d.veto)return l("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;d=b.param(e);a.type.toUpperCase()=="GET"?(a.url+=(a.url.indexOf("?")>=0?"&":"?")+d,a.data=null):a.data=d;var h=this,g=[];a.resetForm&&g.push(function(){h.resetForm()});
a.clearForm&&g.push(function(){h.clearForm()});if(!a.dataType&&a.target){var k=a.success||function(){};g.push(function(c){b(a.target).html(c).each(k,arguments)})}else a.success&&g.push(a.success);a.success=function(b,c){for(var d=0,f=g.length;d<f;d++)g[d].apply(a,[b,c,h])};d=b("input:file",this).fieldValue();e=!1;for(c=0;c<d.length;c++)d[c]&&(e=!0);a.iframe||e?b.browser.safari&&a.closeKeepAlive?b.get(a.closeKeepAlive,f):f():b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=
function(a){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){b(this).ajaxSubmit(a);return!1}).each(function(){b(":submit,input:image",this).bind("click.form-plugin",function(a){var d=this.form;d.clk=this;if(this.type=="image")if(a.offsetX!=void 0)d.clk_x=a.offsetX,d.clk_y=a.offsetY;else if(typeof b.fn.offset=="function"){var e=b(this).offset();d.clk_x=a.pageX-e.left;d.clk_y=a.pageY-e.top}else d.clk_x=a.pageX-this.offsetLeft,d.clk_y=a.pageY-this.offsetTop;setTimeout(function(){d.clk=
d.clk_x=d.clk_y=null},10)})})};b.fn.ajaxFormUnbind=function(){this.unbind("submit.form-plugin");return this.each(function(){b(":submit,input:image",this).unbind("click.form-plugin")})};b.fn.formToArray=function(a){var f=[];if(this.length==0)return f;var d=this[0],e=a?d.getElementsByTagName("*"):d.elements;if(!e)return f;for(var c=0,i=e.length;c<i;c++){var h=e[c],g=h.name;if(g)if(a&&d.clk&&h.type=="image")!h.disabled&&d.clk==h&&f.push({name:g+".x",value:d.clk_x},{name:g+".y",value:d.clk_y});else if((h=
b.fieldValue(h,!0))&&h.constructor==Array)for(var k=0,l=h.length;k<l;k++)f.push({name:g,value:h[k]});else h!==null&&typeof h!="undefined"&&f.push({name:g,value:h})}if(!a&&d.clk){a=d.getElementsByTagName("input");c=0;for(i=a.length;c<i;c++)e=a[c],(g=e.name)&&!e.disabled&&e.type=="image"&&d.clk==e&&f.push({name:g+".x",value:d.clk_x},{name:g+".y",value:d.clk_y})}return f};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=[];this.each(function(){var d=
this.name;if(d){var e=b.fieldValue(this,a);if(e&&e.constructor==Array)for(var c=0,i=e.length;c<i;c++)f.push({name:d,value:e[c]});else e!==null&&typeof e!="undefined"&&f.push({name:this.name,value:e})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],d=0,e=this.length;d<e;d++){var c=b.fieldValue(this[d],a);c===null||typeof c=="undefined"||c.constructor==Array&&!c.length||(c.constructor==Array?b.merge(f,c):f.push(c))}return f};b.fieldValue=function(a,f){var d=a.name,e=a.type,c=a.tagName.toLowerCase();
typeof f=="undefined"&&(f=!0);if(f&&(!d||a.disabled||e=="reset"||e=="button"||(e=="checkbox"||e=="radio")&&!a.checked||(e=="submit"||e=="image")&&a.form&&a.form.clk!=a||c=="select"&&a.selectedIndex==-1))return null;if(c=="select"){var i=a.selectedIndex;if(i<0)return null;for(var d=[],c=a.options,h=(e=e=="select-one")?i+1:c.length,i=e?i:0;i<h;i++){var g=c[i];if(g.selected){g=b.browser.msie&&!g.attributes.value.specified?g.text:g.value;if(e)return g;d.push(g)}}return d}return a.value};b.fn.clearForm=
function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,b=this.tagName.toLowerCase();if(a=="text"||a=="password"||b=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=!1;else if(b=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)&&this.reset()})};
b.fn.enable=function(a){a==void 0&&(a=!0);return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){a==void 0&&(a=!0);return this.each(function(){var f=this.type;if(f=="checkbox"||f=="radio")this.checked=a;else if(this.tagName.toLowerCase()=="option")f=b(this).parent("select"),a&&f[0]&&f[0].type=="select-one"&&f.find("option").selected(!1),this.selected=a})}})(jQuery);