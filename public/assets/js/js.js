jQuery(document).ready(function () {

    var navListItems = jQuery('div.setup-panel div a'),
        allWells = jQuery('.setup-content'),
        allNextBtn = jQuery('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var jQuerytarget = jQuery(jQuery(this).attr('href')),
            jQueryitem = jQuery(this);

        if (!jQueryitem.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            jQueryitem.addClass('btn-success');
            allWells.hide();
            jQuerytarget.show();
            jQuerytarget.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = jQuery(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = jQuery('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        jQuery(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                jQuery(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    jQuery('div.setup-panel div a.btn-success').trigger('click');




    $('.step').each(function(index, element) {
        // element == this
        $(element).not('.active').addClass('done');
        //$('.done').html('<i class="icon-ok"></i>');
        //if($(this).is('.active')) {
          //return false;
        //}
    }); 
});