(function ($) {
   $.fn.scrollUnique =function () {
      var eventType ='mousewheel';
      if(document.mozHidden !== undefined){
         eventType ='DOMMouseScroll';
      }
      return this.each(function () {
         $(this).on(eventType,function (event) {
            var scrollTop=this.scrollTop;
            var scrollHeight =this.scrollHeight;
            var height =this.clientHeight;
            var delta =(event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
               // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
               this.scrollTop = delta > 0? 0: scrollHeight;
               // 向上滚 || 向下滚
               event.preventDefault();
            }
         });
      });
   }
}(jQuery))
