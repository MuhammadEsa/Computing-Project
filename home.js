/**
 * Created by asifsiddiqui on 21/02/2017.
 */

$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyC97BdTEnR2xSRXn1pxYC0vkcPVIEHutz0",
        authDomain: "travel-agency-comp-project.firebaseapp.com",
        databaseURL: "https://travel-agency-comp-project.firebaseio.com",
        storageBucket: "travel-agency-comp-project.appspot.com",
        messagingSenderId: "203680461964"
    };
    firebase.initializeApp(config);

    $("#search").on('click', function () {




        $("#homepage").validate({
            submitHandler: function () {
                var path = "/Flight";
                var ref = firebase.database().ref(path);
                var flyingFrom = $("#flyingfrom").val();
                var flyingTo = $("#flyingto").val();


                ref.orderByChild('PickupAirportID').startAt(flyingFrom).endAt(flyingTo).once('value')
                    .then(function (snapshot) {
                        var flights = snapshot.val();
                        renderStockReport(flights);
                    });

            },
            invalidHandler: function (event, validator) {
                alert('There are errors in the form. Please correct them and try again.');
            }
        });
    });

        function renderStockReport(flights) {
            $("#searchResults-tableBody").html("");
            var html = "";
            for (var key in flights) {
                var flight = flights[key];
                html += "<tr><td>" +
                    flight.flyingFrom;
                    "</td><td>" +
                    flight.flyingTo +
                    "</td><td>" +
                    product.ADate +
                    "</td></tr>"
            }
            $("#searchResults-tableBody").html(html);
        }



});

