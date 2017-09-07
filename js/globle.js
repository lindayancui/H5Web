$(function () {

  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }



  //返回顶部
  // goBack()
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }


});
/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {
  var Route = {
    /* 提出 URL 以备 提取接口 可以集中管理 */
    baseUrl : 'http://192.168.44.34:9090',
  };
  window.Route = Route; /* 向外暴露 Route */
})(window);