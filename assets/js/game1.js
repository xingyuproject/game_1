//浏览器的兼容设置  
window.requestAnimFrame = (function(){                
              return  window.requestAnimationFrame       || 
                      window.webkitRequestAnimationFrame || 
                      window.mozRequestAnimationFrame    || 
                      window.oRequestAnimationFrame      || 
                      window.msRequestAnimationFrame     || 
                      function(/* function */callback,/* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);     //定义每秒执行60次动画
       			};
            	})();




