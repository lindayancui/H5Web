$(function () {
//获取列表
  var page = 1;
  var maxCount = 1;
  var pagesize = 10;
  getList();
  function getList() {
    $.ajax({
      url: Route.baseUrl+'/api/getmoneyctrl',
      type:'get',
      data:{
        pageid:page,
      },
      success:function (data) {
        console.log(data);
        $('.prolist>ul').html(template('tpl',data));
        if(maxCount!=Math.ceil(data.totalCount/pagesize)){
          maxCount = Math.ceil(data.totalCount/pagesize);
        }
      }
    });
  }

  //分页
  $('.next').on('click',function () {
    page++;
    console.log(page);
    if(page>maxCount){
      page=maxCount;
      alert('已经是最后一页了')
    }
    getList();
    return false;
  });
  //上一页
  $('.prev').on('click',function () {
    page--;
    if(page<1){
      page =1;
      alert('已经是第一页了')
    }
    getList();
    return false;
  });

  $('.sel').change(function () {
    page++;
    var opindex = $(this).index();
    getList();

  });

  //返回顶部
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
  goBack()


});
