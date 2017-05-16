var jqxhr = $.getJSON("products.json", function (product) {

    $.each(product, function (key, value) {
        //Do I even need the KEY in this example?
        //$("tbody").append("<tr>" + "<td>" + value.name + ": $" + value.price + "</td>" + "</tr>");

        //this should not use html in the javascript file. refactor
        $("select").append("<option>" + value.name + " $" + value.price + "</option>");
    });

})
    .fail(function (error) {
        alert("Something went wrong, please re-load the page and try again. The Error Is: ", error);
    });