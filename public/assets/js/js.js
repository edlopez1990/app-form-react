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
            curInputs = curStep.find("input[type='text'],input[type='url'],select,textarea"),
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







    $('.start, .end').timepicker({
      showInputs: false,
      minuteStep: 1,
  });
$( "#end, #start" ).change(function() {

var time = $("#start").val();
var hours = Number(time.match(/^(\d+)/)[1]);
var minutes = Number(time.match(/:(\d+)/)[1]);
var AMPM = time.match(/\s(.*)$/)[1];
if(AMPM == "PM" && hours<12) hours = hours+12;
if(AMPM == "AM" && hours==12) hours = hours-12;
var sHours = hours.toString();
var sMinutes = minutes.toString();
if(hours<10) sHours = "0" + sHours;
if(minutes<10) sMinutes = "0" + sMinutes;
var time2 = $("#end").val();
if(time2=="")
{
    var time2 = "00:00 AM";
}
var hours2 = Number(time2.match(/^(\d+)/)[1]);
var minutes2 = Number(time2.match(/:(\d+)/)[1]);
var AMPM2 = time2.match(/\s(.*)$/)[1];
if(AMPM2 == "PM" && hours2<12) hours2 = hours2+12;
if(AMPM2 == "AM" && hours2==12) hours2 = hours2-12;
var sHours2 = hours2.toString();
var sMinutes2 = minutes2.toString();
if(hours2<10) sHours2 = "0" + sHours2;
if(minutes2<10) sMinutes2 = "0" + sMinutes2;
//alert(sHours + ":" + sMinutes);
var comparehour = sHours2-sHours;
var comparemin = sMinutes2-sMinutes;
if(comparehour<0)
{
    $("#end").val(time);
}
else if((comparehour==0) && (comparemin<0))
{
    $("#end").val(time);
}
 });




});