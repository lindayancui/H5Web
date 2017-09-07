$(function () {
  $.ajax({
    url:Route.baseUrl+'/api/getbrandtitle',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data);
      $('.category-title').append(template('tpl',data))
    }
  })

  goBack();
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
});
