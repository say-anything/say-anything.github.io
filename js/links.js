$("#comment_area").ready(function(){$(".all_content").each(function(){var t=$(this).html(),a=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi,e=t.replace(a,"<a href='$1' target='_blank'>$1</a>");$(this).html(e)})});