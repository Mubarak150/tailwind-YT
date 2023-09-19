var value1;
var alertText;

$("#first-name").on("change", function () {
    alertText = $("#first-name-alert");
    alertText.removeClass("hidden");
    value1 = $(this).val();
    console.log(value1);
    if (value1.length < 1) {
        alertText.text("This field is mandatory...");
    } else {
        alertText.text("go ahead!");
    }
});