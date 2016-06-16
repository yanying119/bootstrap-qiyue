//监听事件和接触监听事件。obj为监听对象、type为事件、func为触发的函数
function addEventList(obj,type,func){

	if(obj.addEventListener){

		obj.addEventListener(type,func,false);
	}else if (obj.detachEvent){

		obj.attachEvent("on"+type,func);
	}else {

		obj['on'+type] = func;
	}
}

function removeEventList(obj,type,func){

	if(obj.removeEventListener){

		obj.removeEventListener(type,func,false);
	}else if (obj.detachEvent){

		obj.detachEvent("on"+type,func);
	}else {

		delete obj['on'+type];
	}
}

//滚轮事件up向上的事件。down向下的事件.removeWheel();解除滚轮事件

function wheel(obj,up,down){
	var move = function(event){
		var event = event || window.event;
		if (event.detail){

			if(event.detail>0){
				down(obj);
			}else{
				up(obj);
			}
		}else{
			if(event.wheelDelta>0){
				up(obj);
			}else{
				down(obj);
			}
		}
	}

	if (window.addEventListener){
		document.addEventListener('DOMMouseScroll',move,false);
	}
	window.onmousewheel=document.onmousewheel = move;
}

function removeWheel(){
	if (window.addEventListener){
		document.removeEventListener('DOMMouseScroll',false);
	}
	window.onmousewheel=document.onmousewheel = null;
}