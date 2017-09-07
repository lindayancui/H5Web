$(function () {
  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var brandtitleid = idName('brandTitleid')//标题id
  var productid = idName('productid')//商品id
  //平板电脑哪个好
  $.ajax({
    url:Route.baseUrl+'/api/getbrand',
    type:'get',
    data:{
      brandtitleid:brandtitleid,
    },
    success:function (data) {
      // console.log(data);
      $('.row>ul').append(template('tpl',data));

      var Top = $('.row>ul>li>a>em');
      getStyle(Top)
    }
  })
  function getStyle(dom) {
    $(dom).eq(0).addClass('top1')
    $(dom).eq(1).addClass('top2')
    $(dom).eq(2).addClass('top3')
  }
  //电视销售排行
  $.ajax({
    url:Route.baseUrl+'/api/getbrandproductlist',
    type:'get',
    data:{
      brandtitleid:brandtitleid,
      pagesize:4,
    },
    success:function (data) {
      console.log(data);
      $('.product-list>ul').append(template('tplPrclist',data))
    }
  })

  //销量排行评论区
  $.ajax({
    url:Route.baseUrl+'/api/getproductcom',
    type:'get',
    data:{
      productid:1
    },
    success:function (data) {
      console.log(data);
      $('.pllist>ul').append(template('myComment',data))
    }
  })

  goBack()
  function goBack() {
    $('#goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }

});
