require([],function(){var i=!1,e=function(){require(["/js/mobile.js"],function(e){e.init(),i=!0})},n=!1,a=function(){require(["/js/pc.js"],function(i){i.init(),n=!0})},t={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&n)return void $(window).unbind("resize");var t=$(window).width();t>=700?a():e()}),t.versions.mobile===!0||$(window).width()<700?e():a(),yiliaConfig.fancybox===!0&&require(["/fancybox/jquery.fancybox.js"],function(i){var e=$(".isFancy");if(0!=e.length){for(var n=$(".article-inner img"),a=0,t=n.length; a<t; a++){var r=n.eq(a).attr("src"),o=n.eq(a).attr("alt");n.eq(a).replaceWith("<a href='"+r+"' title='"+o+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+r+"' title='"+o+"'></a>")}$(".article-inner .fancy-ctn").fancybox()}}),yiliaConfig.animate===!0&&(require(["/js/jquery.lazyload.js"],function(){$(".js-avatar").attr("src",$(".js-avatar").attr("lazy-src")),$(".js-avatar")[0].onload=function(){$(".js-avatar").addClass("show")}}),yiliaConfig.isHome===!0?require(["//cdn.bootcss.com/scrollReveal.js/3.0.5/scrollreveal.js"],function(i){function e(){$(".article").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")?($(this).removeClass("hidden").addClass("show"),$(this).addClass("is-hiddened")):$(this).hasClass("is-hiddened")||$(this).addClass("hidden")})}var n=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=n.length,t=n[Math.ceil(Math.random()*a)-1];return window.requestAnimationFrame?void i({duration:0,afterReveal:function(i){$(i).addClass("animated "+t).css({opacity:1})}}).reveal(".body-wrap > article"):($(".body-wrap > article").css({opacity:1}),void(navigator.userAgent.match(/Safari/i)&&($(window).on("scroll",function(){e()}),e())))}):$(".body-wrap > article").css({opacity:1})),1==yiliaConfig.open_in_new&&($(".article a[href]").attr("target","_blank"),$(".archive-article-title").attr("target","_blank"))});