$(function () {
    $.ajax({
      url: Route.baseUrl+'/api/getcategorytitle',
      dataType:'json',
      type:'get',
      success:function (data) {
        console.log(data);
        $('.mainInfo>#ulItem').html(template('tpl',data));
        var Aa = $('#ulItem').find('li>a');
        // console.log(Aa);
        //  点击li列表出现商品详情
        getList(Aa)
      }
    });

      function getList(dom) {
        $(dom).one('click',function() {
          var indxId = $(this).attr('data-index');
          var that = $(this);
          $(this).parent().find('ul').toggleClass('hide');
          $.ajax({
            url:  Route.baseUrl+'/api/getcategory',
            dataType: 'json',
            type: 'get',
            data: {
              titleid: indxId,
            },
            success: function (msg) {
              console.log(msg);
              that.parent().append(template('tpl2', msg))
              // $('.myList').show();
            }
          });
        });
        $(dom).on('click', function() {
          $(this).parent().find('ul').toggleClass('hide');
        })
      }

  //返回顶部
  function goBack() {
    $('.goBack').click(function () {
      $('html,body').stop().animate({'scrollTop':0},500);
    })
  }
  goBack()

  });
