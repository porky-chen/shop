//type()工具，实现所有类型的转换
function type(target) {
    var str = Object.prototype.toString.call(target);//可以返回template里面的属性名类型
    var template = {
    "[object Number]" : "number-object",
    "[object String]" : "string-object",
    "[object Boolean]": "boolean-object",
    "[object Array]"  : "array-object",
    "[object Object]" : "object-object"
  }
    if(target === null){
      return "null";
    }
    if(typeof(target) == "object"){
       return template[str];
    }else{
      return typeof(target);
    }
 }

 function addEvent(elem, type, handle) {
 	if(elem.addEventListener){
 		elem.addEventListener(type,handle,false);
 	}else if(elem.attachEvent){
 		elem.attachEvent('on'+type,function(){
 			handle.call(elem);
 		})
 	}else{
 		elem['on'+type] = handle;
 	}
 }

 function stopBubble(event) {
 	if(event.stopPropagation) {
 		event.stopPropagation();
 	}else{
 		event.cancelBubble = true;
 	}
 }

 function cancelHandler(event) {
 	if(event.preventDefault) {
 		event.preventDefault();
 	}else{
 		event.returnValue = false;
 	}
 }