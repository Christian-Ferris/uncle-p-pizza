$(document).ready(function () {

    $("size","crust","meats","veggies").change(calculatePizza);

    function calculatePizza()
    {
        var size = $("size").checked();
        size = parseFloat(size);
        var crust = $("crust").checked();
        crust = parseFloat(crust);
        var meatNum = $("meats").checked();
        meatNum = parseFloat(meatNum);
        var veggieNum = $("veggies").checked();
        veggieNum = parseFloat(veggieNum);

        var pizzaSubtotal = size + meatNum + veggieNum;
        var pizzaSubtotalDisplay = pizzaSubtotal.toFixed(2);

        var tax = pizzaSubtotal * 0.051;
        var taxDisplay = tax.toFixed(2);
        var deliveryFee = 2;

        var orderDesc = "1 " + crust + " style pizza with " + meatNum + " and " + veggieNum;

        var total = pizzaSubtotal + tax + deliveryFee;
        var grandTotal = total.toFixed(2);

        $("#orderDesc").text(orderDesc);
        $("#subtotal").text(pizzaSubtotalDisplay);
        $("#taxDisplay").text(taxDisplay);
        $("#orderTotal").text("$"+grandTotal);
    }



    // Object containing the validation rules
    var rules =
        {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            phone: {
                required: true,
                digits: true,
                phoneUS: true
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            zip: {
                required: true
            }
        };

    // Object containing the error messages
    var messages =
        {
            firstName: {
                required: "Please enter a first name"
            },
            lastName: {
                required: "Please enter a last name"
            },
            phone: {
                required: "Please enter a phone number",
                digits: "No decimals",
                phoneUS: "Please enter a valid phone number"
            },
            address: {
                required: "Please enter a address for delivery"
            },
            city: {
                required: "Please enter a city"
            },
            zip: {
                required: "Please enter a zip code"
            }
        };


    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: rules,
            messages: messages
        }
    );


    function runMyProgram() {
        /* Change the text of the <p> with ID of "message" to
        state, for example, "You have registered Jane for grade 6 camp!"
        Use the name and grade the user provided in the form. */
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zip = $("#zip").val();

        var addressDisplay = address + ", " + city + ", " + state;

        $("#firstNameDisplay").text(firstName);
        $("#lastNameDisplay").text(lastName);
        $("#phoneDisplay").text(phone);
        $("#addressDisplay").text(addressDisplay);
        $("#zipDisplay").text(zip);
    }
});