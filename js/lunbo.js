

    $(document).ready(function () {

        $('#view img').css('width',document.body.clientWidth);

        var i = 0;

        var width = $(".banner").width();

        var clone = $(".banner .img li").first().clone();//克隆第一张图片
        $(".banner .img").append(clone);//复制到列表最后
        var size = $(".banner .img li").size();


        for (var j = 0; j < size-1; j++) {
            $(".banner .num").append("<li></li>");
        }

        $(".banner .num li").first().addClass("on");

		/*自动轮播*/

        var t = setInterval(function () { i++; move();},4000);

		/*鼠标悬停事件*/

       $(".banner").hover(function () {
            clearInterval(t);//鼠标悬停时清除定时器
        }, function () {
            t = setInterval(function () { i++; move(); }, 4000); //鼠标移出时清除定时器
        });




		/*鼠标滑入原点事件*/

        $(".banner .num li").hover(function () {

            var index = $(this).index();//获取当前索引值
            i = index;
            $(".banner .img").stop().animate({ left: -index * width }, 1000);
            $(this).addClass("on").siblings().removeClass("on");
        });



		/*向左按钮*/
        $(".banner .btn_l").click(function () {
            i--;
            move();
        })


		/*向右按钮*/
        $(".banner .btn_r").click(function () {
            i++;
            move();
        })

		/*移动事件*/
        function move() {
            if (i == size) {
                $(".banner .img").css({ left: 0 });
                i = 1;
            }
            if (i == -1) {
                $(".banner .img").css({ left: -(size - 1) * width });
                i = size - 2;
            }
            $(".banner .img").stop().animate({ left: -i * width }, 1000);

            if (i == size - 1) {
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }
    });


