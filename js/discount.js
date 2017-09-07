$(function () {
  //获取地址栏的参数
  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var productid = idName('productid');
  //获取详情页
  $.ajax({
    url: Route.baseUrl+'/api/getdiscountproduct',
    type:'get',
    dataType:'JSON',
    data:{
      productid:productid
    },
    success:function (data) {
      console.log(data);
      $('.topPart').html(template('tpl',data))
      $('.myComment').html((template('tpl3',data)))
    }
  });
  //返回顶部
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
  goBack()
});