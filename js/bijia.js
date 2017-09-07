$(function () {

  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var ids = idName('productid');//获取商品id
  var idPdc = idName('categoryid');//分类的Id

  var uid = $('#myLi').attr('data-txt');

  //获取面包屑
  $.ajax({
    url:Route.baseUrl+'/api/getcategorybyid',
    type:'get',
    dataType:'json',
    data:{
      categoryid:idPdc
    },
    success:function (data) {
      console.log(data);
      $('.bread').append(template('pl',data))
      pic();
    }
  });
  //大图展示
  function pic() {
    $.ajax({
      url:Route.baseUrl+'/api/getproduct',
      type:'get',
      data:{
        productid:ids
      },
      dataType:'json',
      success:function (data) {
        console.log(data);
        var aa = data.result[0].productId;
        var co = data.result[0].categoryId;
        var name =data.result[0].productName.split(' ')[0];
        var str ='';
        str+='<a id="myLi">'+name+'</a>';
        console.log(name);
        $('#p_bread').append(str);
        $('.title').append(template('tpl',data));
      }
    });
  }

  //评论
  $.ajax({
    url:Route.baseUrl+'/api/getproductcom',
    type:'get',
    dataType:'json',
    data:{
      productid:ids
    },
    success:function (data) {
      // console.log(data);
      $('.pl_list>ul').append(template('tpl2',data))
    }
  })

  goBack()
  function goBack() {
    $('#goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }

});