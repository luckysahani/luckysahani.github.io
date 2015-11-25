checkOthers = function () {
	if ($('select#dcity option:selected').html() == "Others") {
		$('#othercity').show();
		$('#othercity input')[0].setAttribute('required', 'required');
	}
	else{
		$('#othercity').hide();
		$('#othercity input')[0].removeAttribute('required');
	}
}

filterType = function () {
    console.log("bitches!!");
    if ($('select#filter_type option:selected').val() == 'kbest')
        $('input#queryrank').attr('step','1');$('input#queryrank').removeAttr('max');
    else if ($('select#filter_type option:selected').val() == 'threshold')
        $('input#queryrank').attr('step','0.1');$('input#queryrank').attr('max','1');
}