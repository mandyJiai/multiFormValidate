$(function(){
	$("#macco-form").validate({
		
	})

	$("#jmj-form").validate({
		
	})

	$("#div1").validate({

	})

	$("#div2").validate({
		
	})

    $(".select_content ul li").click(function(){
		var objtext=$(this).text();
		$(this).parent().parent().prev().find("input").attr("value",objtext);
		$(this).parent().parent().attr("macco-select-content","true");
		$(this).parent().parent().html('');
	})
})
