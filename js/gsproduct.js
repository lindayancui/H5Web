$(function () {
  //获取标题店铺
  var shopid =null;
  var areaid =null;
  var page = 1;
  var maxCount =0;
  console.log($('.filter>.hd_list>li'));
  var lis01 = $('.filter>.hd_list>li:nth-child(1)');
  var lis02 = $('.filter>.hd_list>li:nth-child(2)');
  var lis03sel = $('.popsort3>ul>li')
  $.ajax({
    url:Route.baseUrl+'/api/getgsshop',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data);
      $('.popsort>ul').html(template('tpl',data))
      var lis= $('.popsort>ul>li');
      lis.click(function () {
        shopid = $(this).attr('data-shopid');
        var txt = $(this).html();
        $('.p_sel').addClass('hide').siblings().removeClass('show');
        lis01.html(txt)
        getProductList();
        return false;
      });
    }
  });
  //获取地区//点击获取下拉的列表
  $.ajax({
    url:Route.baseUrl+'/api/getgsshoparea',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data);
      $('.popsort2>ul').html(template('tpl2',data))
      var lis= $('.popsort2>ul>li')
      lis.click(function () {
        areaid = $(this).attr('data-areaid');
        var txt = $(this).html();
        $('.p_sel').addClass('hide').siblings().removeClass('show');
        lis02.html(txt)
        getProductList();
        return false;
      })
    }
  });


  //点击京东出现下拉
  $('.p_sel').addClass('hide');
  $('.hd_list>.ls01').click(function () {
    $('.popsort').toggleClass('hide');
    return false;
  });

  //点击地区出现下拉
  $('.hd_list>.ls02').click(function () {
    $('.popsort2').toggleClass('hide');
    return false;
  });

  //全部价格
  var lis = $('.filter .hd_list >li:nth-child(3)');
  lis.click(function () {
    $('.popsort3').toggleClass('hide');
    return false;
  });
  lis03sel.click(function () {
    $('.p_sel').addClass('hide').siblings().removeClass('show');
  });
  //商品列表
  getProductList();
  function getProductList() {
    $.ajax({
      url:Route.baseUrl+'/api/getgsproduct',
      data:{
        shopid:shopid || 0,
        areaid: areaid|| 1
      },
      type:'get',
      dataType:'json',
      success:function (data) {
        console.log(data);
        $('.product>ul').html(template('tplPr',data))
      }
    })
  }

  //分页
  
  //返回顶部
  goBack()
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }


});
