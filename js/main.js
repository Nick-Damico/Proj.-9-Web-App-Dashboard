// Author: Nicholas D'Amico
// Contact: nickalan82@icloud.com
// Checked project in: Chorme 54.0.02840.71, FireFox 50.0 & 49.0.1, safari 10.0.1
// Treehouse Project 9: Web App Dashboard

// ToDo:
  // 1. Add message response to users click on 'save' btn in settings widget.
  // 2. refactor Alert Msg.


// iife function
$(function() {

    /////////////////////////////////////////////////////
    // Element Global Variables
    /////////////////////////////////////////////////////

    //  Alert Notification Close Btn.

    // Line Chart Canvas El.
    var Linectx = document.getElementById('myLineChart').getContext("2d");
    // Bar Chart Canvas El.
    var Barctx = document.getElementById('myBarChart').getContext("2d");
    // Doughnut Chart Canvas El.
    var Piectx = document.getElementById('myPieChart').getContext("2d");
    //  Hides Modal window on load.
    $(".form-confirm-msg").hide();




    //  input type="checkbox" #emailNotification
    var $emailCheckbox = $('#emailNotification');
    //  input type="checkbox" #profilePrivacy
    var $privacyCheckbox = $('#profilePrivacy');


    /////////////////////////////////////////////////////
    // Functions
    /////////////////////////////////////////////////////

    //  Appends msg to Modal and displays over 2000ms to user once send is 'clicked'.
    function displayModal(msg) {
        var $container = $('.form-confirm-msg');
        $container.prepend(msg)
            .fadeIn()
            .delay(2500)
            .fadeOut(function(e) {
                $(this).text("");
            })
    }

    //  Sets Select option for users time zone in localStorage
    // if localStorage.timeZone is 'undefined', select defaults to '<option>Select timeZone'
    function usersTimeZone( usersTime ) {
        $('#timezone-select option').each(function() {
            if ($(this).attr('value') === usersTime) {
                $(this).attr("selected", "true");
            }
        });
    }

    /////////////////////////////////////////////////////
    //  Notification Alert
    /////////////////////////////////////////////////////


    var alertMsgs = [
      {
        msg : 'You have 2 New Likes on Your recent post',
      },
      {
        msg : 'You have a New Message from Ryan Carson',
      }
    ];

    // REMOVES ALERT MSG FROM PAGE ON CLICK
    $(document).on('click', '.close-alert', function() {
        $this = $(this);
        $this.parent().fadeOut(1000);
    });

    function AlertMsgBuilder() {


    }

    $('#alertLink').on('click', function(e) {
      var $userAlertBox = $('.user-alert-inner-container');
      $userAlertBox.show();
      var msg = '';
      for( var i = 0; i < alertMsgs.length; i++ ) {
        if( alertMsgs[i].msg !== "" ) {
        msg += '';
        msg += '<p class="user-alert-message">';
        msg += '<strong>Alert </strong>';
        msg += alertMsgs[i].msg + '!';
        msg += '<span class="close-alert">x</span>';
        msg += '</p>';
        $userAlertBox.append(msg);
        msg = "";
        alertMsgs[i].msg = "";
        }
      }
    });

    /////////////////////////////////////////////////////
    //
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // Line Chart Widget
    /////////////////////////////////////////////////////

    var myChart = new Chart(Linectx, {
        type: 'line',
        data: {
            labels: ["16-22", "22-39", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
                data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2000, 1750, 2250],
                lineTension: 0,
                pointBorderColor: 'rgba(150, 132, 208, 1)',
                pointRadius: 4,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff',
                backgroundColor: [
                    'rgba(150, 132, 208, 0.2)'
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(150, 132, 208, 1)'
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    /////////////////////////////////////////////////////
    // Bar Chart Widget
    /////////////////////////////////////////////////////

    var myBarChart = new Chart(Barctx, {
        type: 'bar',
        data: {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                label: ["Mobile Views", "Desktop Views"],
                data: [50, 75, 175, 125, 225, 180, 100],
                backgroundColor: [
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)'
                ],
                borderColor: [
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)',
                    'rgba(94, 98, 179, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    /////////////////////////////////////////////////////
    // Doughnut Chart Widget
    /////////////////////////////////////////////////////

    var myPieChart = new Chart(Piectx, {
        type: 'doughnut',
        data: {
            labels: ["Desktop", "Phones", "Tablets"],
            datasets: [{
                data: [10345, 12953, 5600],
                backgroundColor: [
                    'rgba(90, 93, 167, 1)',
                    'rgba(101, 162, 178, 1)',
                    'rgba(118, 191, 122, 1)'
                ],
                borderColor: [
                    'rgba(90, 93, 167, 1)',
                    'rgba(101, 162, 178, 1)',
                    'rgba(118, 191, 122, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                position: "right",
            }
        }
    });





    //  ADD LIGHT TO BELL.SVG ICON IF THERE ARE MSGS.

    /////////////////////////////////////////////////////
    //  FORM VALIDATION
    /////////////////////////////////////////////////////


    $('button.submit-btn').on('click', function(e) {
        // Stop Submit page refresh on click.
        e.preventDefault();

        // Variables for input fields
        var $userInput = $('#userSearch');
        var $msgUser = $('#msgToUser');
        //  Build msg for modal.
        var msg = "";
        //  Check if either input fields are empty.
        if ($msgUser.val() !== "" && $userInput.val() !== "") {
            // Get Msg recipent Name
            var user = $userInput.val();
            msg += '<p>Your message to';
            msg += '<br/><strong> ';
            msg += user + ' </strong><br/>';
            msg += "has been sent!";
            //  Display msg in modal.
            displayModal(msg);
            //  clear user name input
            $userInput.val("");
            //  clear textarea input.
            $msgUser.val("");
        } else {
            msg += '<p>Please Complete the form with a';
            msg += '<br/> <strong>User Name</strong>';
            msg += 'and <strong>Message</strong></p>';
            displayModal(msg);
        }
        //  clear msg
        msg = "";
    });



    /////////////////////////////////////////////////////
    //  APP SETTINGS ( LOCAL STORAGE )
    /////////////////////////////////////////////////////

    //  Check for localStorage Browser support
    if (typeof(Storage) !== "undefined") {

        //  Sets users time zone from 'save' button.
        usersTimeZone(localStorage.timeZone);

        //  On load checks users localStorage settings
        //  Applies Users settings from 'save' button.
        if (localStorage.emailSetting === "on") {
            // Function call turns 'Send email Notifications' to 'on'.
            setEmailPref(localStorage.emailSetting);
        }

        if (localStorage.profileSetting === "on") {
            // Function call turns 'Set Profile to Public' to 'on'.
            setProfilePrivacy(localStorage.profileSetting);
        }

        ////////////////////////////////////////////
        //  Functions for Settings Widget
        //  Functions called on 'save' button click.
        //  Function called on page load if localStorage settings = 'on'.
        ////////////////////////////////////////////


        function setEmailPref(usersEmailPref) {
            if (usersEmailPref) {
                $emailCheckbox.attr('checked', true);
            }
        }

        function setProfilePrivacy(usersProfilePref) {
            if (usersProfilePref) {
                $privacyCheckbox.attr('checked', true);
            }
        }

        function usersEmailPref() {

            if ( $emailCheckbox.is(':checked') ) {
                localStorage.emailSetting = "on";
            } else {
                localStorage.emailSetting = "off";
            }

        }

        function usersProfilePref() {

            if ( $privacyCheckbox.is(':checked') ) {
                localStorage.profileSetting = "on";
            } else {
                localStorage.profileSetting = "off";
            }

        }

        ////////////////////////////////////////////
        // EVENT CLICK HANDLER FOR SETTINGS WIDGET
        //  Save Button Function
        ////////////////////////////////////////////

        // Save App Sets 'click' Event
        $("#saveBtn").on('click', function(e) {
            //  Store users time zone selection
            localStorage.setItem("timeZone", $("#timezone-select").val());

            usersTimeZone( localStorage.timeZone );

            usersEmailPref();

            usersProfilePref();
        });


    } else {
        console.log("Sorry, local storage is not available in your browser");
    }

    //  Switches
    $('#emailSwitch').on('change', function(e) {

    });

    $('#privacySwitch').on('click', function(e) {

    });

});
//  End of iife function
