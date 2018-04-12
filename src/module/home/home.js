import Vue from 'vue'
import HomePage from './HomePage'

/* eslint-disable no-new */
new Vue({
  el: '#homePage',
  template: '<HomePage/>',
  components: { HomePage },
  mounted: function () {
    var lunbo_url = "192.168.0.6:3000" + "/api/commerical/app/list";
    var html = '<div id="slider" class="mui-slider"><div class="mui-slider-group mui-slider-loop"><!--额外增加的一个节点(循环轮播：第一个节点是最后一张轮播)--><div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../images/banner2.png"></a></div><!--第一张--><div class="mui-slider-item"><a href="#"><img src="../images/banner2.png"></a></div><!--第二张--><div class="mui-slider-item"><a href="#"><img src="../images/banner3.jpg"></a></div><!--第三张--><div class="mui-slider-item"><a href="#"><img src="../images/banner4.png"></a></div><!--第四张--><div class="mui-slider-item"><a href="#"><img src="../images/banner5.png"></a></div><div class="mui-slider-item"><a href="#"><img src="../images/banner5.png"></a></div><!--额外增加的一个节点(循环轮播：最后一个节点是第一张轮播)--><div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../images/advert/banner.jpg"></a></div></div><div class="mui-slider-indicator"><div class="mui-indicator mui-active"></div><div class="mui-indicator"></div><div class="mui-indicator"></div><div class="mui-indicator"></div><div class="mui-indicator"></div></div></div>'

    setTimeout(function() {
      $("#lunbo").html(html);
    }, 150);

    var success = function(data) {
      console.log(JSON.stringify(data));
      var value = data.data;
      if(value) {
        setTimeout(function() {
          $("#lunbo").html("");
        }, 150);
      }
      if(data.result == "success") {
        setTimeout(function() {
          $("body").processTL(templateRegister.lunbo_main, {
            sub: value
          }, 'prepend', function() {
            var slider = mui("#slider");
            slider.slider({
              interval: 5000
            });
            // $(".qs-img-lazyload").each(function(i, v) {
            //   $$.lazyload(v)
            // })
          });
        }, 150);
      }

    }
    commonHttpUtilsLUNBO(lunbo_url, "get", {}, success, error, true);

  }
})


