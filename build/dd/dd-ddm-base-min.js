YUI.add("dd-ddm-base",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};A.NAME="DragDropMgr";A.ATTRS={clickPixelThresh:{value:3},clickTimeThresh:{value:1000},dragMode:{value:"point",set:function(C){this._setDragMode(C);}}};B.extend(A,B.Base,{_setDragMode:function(C){if(C===null){C=B.DD.DDM.get("dragMode");}switch(C){case 1:case"intersect":return 1;case 2:case"strict":return 2;case 0:case"point":return 0;}return 0;},CSS_PREFIX:"yui-dd",_activateTargets:function(){},_drags:[],activeDrag:false,_regDrag:function(C){this._drags[this._drags.length]=C;},_unregDrag:function(D){var C=[];B.each(this._drags,function(F,E){if(F!==D){C[C.length]=F;}});this._drags=C;},initializer:function(){B.Node.get("document").on("mousemove",this._move,this,true);B.Node.get("document").on("mouseup",this._end,this,true);B.Event.Target.apply(this);},_start:function(C,F,D,E){this._startDrag.apply(this,arguments);},_startDrag:function(){},_endDrag:function(){},_dropMove:function(){},_end:function(){if(this.activeDrag){this._endDrag();this.activeDrag.end.call(this.activeDrag);this.activeDrag=null;}},stopDrag:function(){if(this.activeDrag){this._end();}return this;},_move:function(C){if(this.activeDrag){this.activeDrag._move.apply(this.activeDrag,arguments);this._dropMove();}},setXY:function(E,F){var D=parseInt(E.getStyle("top"),10),C=parseInt(E.getStyle("left"),10),G=E.getStyle("position");if(G==="static"){E.setStyle("position","relative");}if(isNaN(D)){D=0;}if(isNaN(C)){C=0;}E.setStyle("top",(F[1]+D)+"px");E.setStyle("left",(F[0]+C)+"px");},cssSizestoObject:function(E){var D=E.split(" "),C={top:0,bottom:0,right:0,left:0};if(D.length){C.top=parseInt(D[0],10);if(D[1]){C.right=parseInt(D[1],10);}else{C.right=C.top;}if(D[2]){C.bottom=parseInt(D[2],10);}else{C.bottom=C.top;}if(D[3]){C.left=parseInt(D[3],10);}else{if(D[1]){C.left=C.right;}else{C.left=C.top;}}}return C;},getDrag:function(D){var C=false,E=B.Node.get(D);if(E instanceof B.Node){B.each(this._drags,function(G,F){if(E.compareTo(G.get("node"))){C=G;}});}return C;}});B.namespace("DD");B.DD.DDM=new A();},"@VERSION@",{requires:["node","nodeextras","base"],skinnable:false});