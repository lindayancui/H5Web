$(function () {
  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var productid = idName('productid');
  //详情页
  $.ajax({
    url: Route.baseUrl+'/api/getmoneyctrlproduct',
    type:'get',
    dataType:'JSON',
    data:{
      productid:productid
    },
    success:function (data) {
      console.log(data);
      $('.topPart').html(template('tpl',data))
      $('.area').html(template('tpl2',data))
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
