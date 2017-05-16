var jqxhr = $.getJSON("products.json", function (product) {

    $.each(product, function (key, value) {
        $("select").append("<option>" + value.name + " $" + value.price + "</option>");
    });

})
    .fail(function (error) {
        alert("Something went wrong, please re-load the page and try again. The Error Is: ", error);
    });