$(function () {
  $.ajax({
    url:Route.baseUrl+'/api/getsitenav',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data);
      $('.site-nav>ul').append(template('tpl',data))
    }
  })
});
