$(function () {
  $.ajax({
    url: Route.baseUrl+'/api/getinlanddiscount',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data);
      $('.list>ul').append(template('tpl',data))
    }
  })

  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
  goBack()

});
