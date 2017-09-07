$(function () {

  var couponid = idName('couponid')
  var imgSrc =null;
  var lis =null;
  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
    //优惠券列表
  $.ajax({
    url:Route.baseUrl+'/api/getcouponproduct',
    dataType:'json',
    type:'get',
    data:{
      couponid:couponid
    },
    success:function (data) {
      console.log(data);
      $('.main-item>ul').html(template('tpl',data))
       lis = $('.main-item>ul>li')
      console.log(lis);

      var liImg = lis.children().find("img");
      //获取到所有的图片标签
      lis.click(function () {
        var index = $(this).attr("data-txt");
        var src = liImg[index].src;//data里的img的src
        $('.model').show();
        var modelLi = $('.slider>.myLi>li>img');//模态框的img
        modelLi.attr("src",src);
        //左箭头点击事件
        $('.arrowRight').click(function () {
          index++;
          if(index==lis.length){
            index = 0;
          }
          src = liImg[index].src;
          modelLi.attr("src",src);
        });
        //
        $('.arrowLeft').click(function () {
          index--;
          if(index<=0){
            index = lis.length-1;
          }
          src = liImg[index].src;
          modelLi.attr("src",src);
        })
      });
    }
  });

//模态框

  //模态框消失
  $('.myLi').click(function () {
    $('.model').hide();
  });


  //返回顶部
  goBack()
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
});
