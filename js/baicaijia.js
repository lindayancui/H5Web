$(function () {
  var titleid = null;
  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  //获取TAB标题
  var titleid = idName('titleid') || 0;
  $.ajax({
    url: Route.baseUrl+'/api/getbaicaijiatitle',
    dataType:'json',
    type:'get',
    success:function (data) {
      // console.log(data);
      $('.ul-wapper>ul').html(template('tpl',data))
      var li = $('.ul-wapper>ul>li')
      var a = $('.ul-wapper>ul>li>a')
      //获取标题的宽度
      var liWidth = li.innerWidth();
      var ul = $('.ul-wapper>ul');
      ul.width = li.length*liWidth+'px';
     //点击刷新
    a.click(function () {
        titleid = $(this).attr('data-txt');
        $(this).parent().addClass('active').siblings().removeClass('active')
        $(this).addClass('active').parent().siblings().children().removeClass('active');
        getPrductList();
      })
    }
  });

  //获取商品列表详情
  getPrductList();
  function getPrductList() {
    $.ajax({
      url:Route.baseUrl+'/api/getbaicaijiaproduct',
      dataType:'json',
      type:'get',
      data:{
        titleid:titleid || 0
      },
      success:function (data) {
        console.log(data);
        $('.bcj-list>ul').html(template('tpl2',data))
      }
    });
    //返回顶部
  }

  goBack();
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }

});
