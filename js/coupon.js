$(function () {
  $.ajax({
    url: Route.baseUrl+'/api/getcoupon',
    dataType:'json',
    type:'get',
    success:function (data) {
      console.log(data);
      $('.mycoupon>ul').append(template('tpl',data))
    }
  })
});
