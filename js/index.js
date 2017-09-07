$(function () {
  //获取首页菜单
  var $lastFour;
  $.ajax({
    url:  Route.baseUrl+'/api/getindexmenu',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data)
      $('nav>ul').html(template('tpl',data))
      $lastFour = $('nav').children('ul').find('li:nth-last-child(-n+4)');
      $lastFour.addClass('hide');
      menuMore($('nav>ul>li:nth-child(8) > a'));
    }
  });


  function menuMore(dom) {
    $(dom).on('click', function() {
      $lastFour.toggleClass('hide');
    })
  }

  //获取折扣列表
  $.ajax({
    url: Route.baseUrl+'/api/getmoneyctrl',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data)
        $('.main>ul').html(template('tplList',data))
    }
  })
  //返回顶部
  function goBack() {
    $('#goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
  goBack()

});
