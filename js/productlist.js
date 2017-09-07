$(function () {
  var pagesize =10;
  var page= 1;
  var maxTotal = 1;
  //获取地址栏上的参数
  function idName(name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  var urlID = idName('categoryid');//定义一个变量得到这个参数方便下面使用
  var that = $(this);
  //获取列表
  getDate(page);
  function getDate() {
    $.ajax({
      url: Route.baseUrl+'/api/getproductlist',
      type:'get',
      data:{
        categoryid:urlID,
        pageid:page
      },
      dataType:'json',
      success:function (data) {
        console.log(data);
        $('.product >ul').html(template('tpl',data));
        if(maxTotal!=Math.ceil(data.totalCount/pagesize)){
          maxTotal = Math.ceil(data.totalCount/pagesize)
        }
      }
    });
  }
//获取标题
  $.ajax({
    url: Route.baseUrl+'/api/getcategorybyid',
    type:'get',
    data:{
      categoryid:urlID
    },
    dataType:'json',
    success:function (data) {
      // console.log(data);
      $('.bread').append(template('tpls',data))
    }
  });

  // 点击分页下一页
  $('.next').on('click',function () {
    page++;
    getDate();
    if(page>maxTotal){
      page=maxTotal;
      alert('已经是最后一页了');
      return false;
    }
  });
 //  上一页
  $('.prev').on('click',function () {
    page--;
    getDate();
    if(page<1){
      page =1;
      alert('已经是最1页了')
      return false;
    }
  });
  //下拉
  $('.sel').change(function () {
    page++;
    getDate();
  });
  //返回顶部
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
  goBack()

});
