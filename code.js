$(document).ready(function () {

    $("#formPizza input").change(calculatePizza);

    function calculatePizza()
    {
        // Ask jquery for the selected size
        var size = $("input[name=size]:checked");
        // Get the string value of size
        var displaySize = size.data("size");
        // Get the price of size
        var sizePrice = size.data("price")

        // Ask jquery for the selected crust
        var crust = $("input[name=crust]:checked");
        // Get value of selected
        var crustDisplay = crust.data("crust");

        // Create variables for meat and veggies
        var meats = "";
        var veggies = "";

        // Ask jquery for all of the selected boxes for both meat and veggies
        var selectedMeats = $("input[name=meats]:checked");
        var selectedVeggies = $("input[name=veggies]:checked");

        // Make global variable to track total meat cost
        var totalMeatCost = 0;
        // Function to run for each meat selected
        selectedMeats.each(function ()
            {
                // Get the price value for each meat
                totalMeatCost += $(this).data("price");
                // Get all of the meat toppings listed for the order display
                meats += $(this).val();
                meats += "<br>";
            }
        );

        // Do the same for veggies
        var totalVeggieCost = 0;
        selectedVeggies.each(function ()
            {
                // Get the price value for each meat
                totalVeggieCost += $(this).data("price");
                // Get all of the meat toppings listed for the order display
                veggies += $(this).val();
                veggies += "<br>";
            }
        );

        // Calculate subtotal of the pizza
        var subtotal = sizePrice + totalMeatCost + totalVeggieCost;
        var subtotalDisplay = subtotal.toFixed(2);

        // Get the calculated tax
        var tax = subtotal * 0.051;
        var taxDisplay = tax.toFixed(2);

        // Delivery fee
        var deliveryFee = 2;
        var deliveryFeeDisplay = "$2.00";

        // Order description
        var orderDesc = "1 " + displaySize + ", " + crustDisplay + " style pizza"

        // Calculate the grand total
        var grandTotal = subtotal + tax + deliveryFee;
        var grandTotalDisplay = grandTotal.toFixed(2);

        // Display All values
        $("#orderDesc").text(orderDesc);
        $("#meatDisplay").html(meats);
        $("#veggieDisplay").html(veggies);
        $("#subtotal").text("$"+subtotalDisplay);
        $("#taxDisplay").text("$"+taxDisplay);
        $("#deliveryDisplay").text(deliveryFeeDisplay);
        $("#orderTotal").text("$"+grandTotalDisplay);
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
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            state: {
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
            state: {
                required: "Please enter a state"
            },
            zip: {
                required: "Please enter a zip code"
            }
        };


    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("#formInfo").validate(
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