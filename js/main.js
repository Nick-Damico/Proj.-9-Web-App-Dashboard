// Author: Nicholas D"Amico
// Contact: nickalan82@icloud.com
// Checked project in: Chorme 55 64-bit, FireFox 50 & 49.0.1, safari 10.0.2
// Treehouse Project 9: Web App Dashboard

// jQuery Ready();
$(function() {

    /////////////////////////////////////////////////////
    // Element Global Variables
    /////////////////////////////////////////////////////

    //  Alert Notification Close Btn.

    // Line Chart Canvas El.
    var Linectx = document.getElementById("myLineChart").getContext("2d");
    // Bar Chart Canvas El.
    var Barctx = document.getElementById("myBarChart").getContext("2d");
    // Doughnut Chart Canvas El.
    var Piectx = document.getElementById("myPieChart").getContext("2d");
    //  Hides Modal window on load.
    $(".form-confirm-msg").hide();
    $(".save-confirm-msg").hide();




    //  input type="checkbox" #emailNotification
    var $emailCheckbox = $("#emailNotification");
    //  input type="checkbox" #profilePrivacy
    var $privacyCheckbox = $("#profilePrivacy");


    /////////////////////////////////////////////////////
    // Functions
    /////////////////////////////////////////////////////

    //  Appends msg to Modal and displays over 2000ms to user once send is "clicked".
    function displayModal(msg, location) {
        var $container = location;
        $container.prepend(msg)
            .fadeIn()
            .delay(2500)
            .fadeOut(function(e) {
                $(this).text("");
            });
    }

    //  Sets Select option for users time zone in localStorage
    // if localStorage.timeZone is "undefined", select defaults to "<option>Select timeZone"
    function usersTimeZone( usersTime ) {
        $("#timezone-select option").each(function() {
            if ($(this).attr("value") === usersTime) {
                $(this).attr("selected", "true");
            } 
        });
    }

    /////////////////////////////////////////////////////
    //  Notification Alert
    /////////////////////////////////////////////////////


    var alertMsgs = [
      {
        msg : "You have 2 New Likes on Your recent post"
      },
      {
        msg : "You have a New Message from Ryan Carson"
      }
    ];

    // REMOVES ALERT MSG FROM PAGE ON CLICK
    $(document).on("click", ".close-alert", function() {
        $this = $(this);
        $this.parent().fadeOut(1000);
    });

    $("#alertLink").on("click", function(e) {
      var $userAlertBox = $(".user-alert-inner-container");
      $userAlertBox.show();
      var msg = "";
      for( var i = 0; i < alertMsgs.length; i++ ) {
        if( alertMsgs[i].msg !== "" ) {
        msg += "";
        msg += "<p class='user-alert-message'>";
        msg += "<strong>Alert </strong>";
        msg += alertMsgs[i].msg + "!";
        msg += "<span class='close-alert'>x</span>";
        msg += "</p>";
        $userAlertBox.append(msg);
        msg = "";
        alertMsgs[i].msg = "";
      } else {
        $(".user-alert-container section").hide();
      }
      }
    });



    /////////////////////////////////////////////////////
    // Line Chart Widget / Monthly, Weekly, Daily, Hourly
    /////////////////////////////////////////////////////

    //  HOURLY TRAFFIC CHART
    var hourlyChartData = [80, 20, 135, 550, 1000, 1150, 900, 1100, 1183, 903, 801, 502, 420];
    var hourlyLabelData = ["1-2am", "3-4am", "5-6am", "7-8am", "9-10am", "10-11am", "12-13pm", "14-15pm", "16-17pm", "18-19pm", "20-21pm", "22-24am" ];

    //  DAILY TRAFFIC CHART
    var dailyChartData =  [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2000, 1750, 2250];
    var dailyLabelData = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    //  WEEKLY CHART DATA
    var weeklyChartData = [1750, 2250, 2000, 2500, 3000, 4500, 5750, 4250, 6750, 4000, 3750, 4250];
    var weeklyLabelData = ["1-4wks", "5-9wks", "10-14wks", "15-19wks", "20-24wks", "25-29wks", "30-34wks", "35-39wks", "40-44wks", "45-59wks", "50-52wks"];

    //  MONTHLY CHART DATA
    var monthlyChartData = [10750, 21250, 21000, 12500, 13000, 14500, 15750, 14250, 16750, 14000, 13750, 14250];
    var monthlyLabelData = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


    // Updates Graph to hourly labels & data on click.
    $("#hourlyData").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = hourlyChartData;
      myChart.data.labels = hourlyLabelData;
      myChart.update();

    });

    // Updates Graph to daily labels & data on click.
    $("#dailyData").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = dailyChartData;
      myChart.data.labels = dailyLabelData;
      myChart.update();
    });

    // Updates Graph to weekly labels & data on click.
    $("#weeklyData").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = weeklyChartData;
      myChart.data.labels = weeklyLabelData;
      myChart.update();
    });

    // Updates Graph to monthly labels & data on click.
    $("#monthlyData").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = monthlyChartData;
      myChart.data.labels = monthlyLabelData;
      myChart.update();
    });


    ///////////////////////////////////
    //  LINE CHART CONSTRUCTOR
    //////////////////////////////////
    var myChart = new Chart(Linectx, {
        type: "line",
        data: {
            labels: hourlyLabelData,
            datasets: [{
                data: hourlyChartData, // DATA UPDATE ON CLICK EVENTS
                lineTension: 0,
                pointBorderColor: "rgba(150, 132, 208, 1)",
                pointRadius: 4,
                pointBorderWidth: 2,
                pointBackgroundColor: "#fff",
                backgroundColor: "rgba(150, 132, 208, 0.4)",
                borderColor: "rgba(150, 132, 208, 1)",
                borderWidth: 2
            }]
        }, // CHART DATA VARIABLES ADDED HERE
        options: {
            responsive: true,
            legend: {
              display: false,
            }
          }
    });



    /////////////////////////////////////////////////////
    // Bar Chart Widget
    /////////////////////////////////////////////////////

    var myBarChart = new Chart(Barctx, {
        type: "bar",
        data: {
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
              {
                label: "Desktop Users",
                data: [50, 75, 175, 125, 225, 180, 100],
                backgroundColor: "rgba(94, 98, 179, 1)",
                borderColor: "rgba(94, 98, 179, 1)",
                borderWidth: 1
            },
            {
              type: "bar",
                label: "Mobile Users",
                data: [150, 95, 205, 245, 255, 210, 160],
                backgroundColor: "rgba(101, 162, 178, 1)",
                borderColor: "rgba(101, 162, 178, 1)",
            }
          ]
        },
        options: {

        }
    });

    /////////////////////////////////////////////////////
    // Doughnut Chart Widget
    /////////////////////////////////////////////////////

    var myPieChart = new Chart(Piectx, {
        type: "doughnut",
        data: {
            labels: ["iPhone", "Android", "Tablets", "Consoles"],
            datasets: [{
                data: [10828, 7798, 5420, 3425],
                backgroundColor: [
                    "rgba(90, 93, 167, 1)",
                    "rgba(101, 162, 178, 1)",
                    "rgba(118, 191, 122, 1)",
                    "rgba(191, 120, 120, 1)"
                ],
                borderColor: [
                    "rgba(90, 93, 167, 1)",
                    "rgba(101, 162, 178, 1)",
                    "rgba(118, 191, 122, 1)",
                    "rgba(191, 120, 120, 1)"
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



    /////////////////////////////////////////////////////
    //  FORM VALIDATION
    /////////////////////////////////////////////////////

    $("button.submit-btn").on("click", function(e) {
        // Stop Submit page refresh on click.
        e.preventDefault();

        // Variables for input element fields
        var $userInput = $("#userSearch");
        var $msgUser = $("#msgToUser");
        //  msg display location
        var $msgLocation = $(".form-confirm-msg");
        //  Build msg for modal.
        var msg = "";
        //  Check if either input fields are Not empty.
        if ($msgUser.val() !== "" && $userInput.val() !== "") {
            // Get Msg recipent Name
            var user = $userInput.val();
            msg += "<p>Your message to";
            msg += "<br/><strong> ";
            msg += user + " </strong><br/>";
            msg += "has been sent!";
            //  Display msg in modal.
            displayModal(msg);
            //  clear user name input
            $userInput.val("");
            //  clear textarea input.
            $msgUser.val("");
        } else {
            msg += "<p>Please Complete the form with a ";
            msg += "<br/><strong>User Name</strong>";
            msg += " and <strong>Message</strong></p>";
            displayModal(msg, $msgLocation);
        }
        //  clear msg
        msg = "";
    });



    /////////////////////////////////////////////////////
    //  APP SETTINGS ( LOCAL STORAGE )
    /////////////////////////////////////////////////////

    //  Check for localStorage Browser support
    if (typeof(Storage) !== "undefined") {

        //  Sets users time zone from "save" button.
        usersTimeZone(localStorage.timeZone);

        //  On load checks users localStorage settings
        //  Applies Users settings from "save" button.
        if (localStorage.emailSetting === "on") {
            // Function call turns "Send email Notifications" to "on".
            setEmailPref(localStorage.emailSetting);
        }

        if (localStorage.profileSetting === "on") {
            // Function call turns "Set Profile to Public" to "on".
            setProfilePrivacy(localStorage.profileSetting);
        }

        ////////////////////////////////////////////
        //  Functions for Settings Widget
        //  Functions called on "save" button click.
        //  Function called on page load if localStorage settings = "on".
        ////////////////////////////////////////////


        function setEmailPref(usersEmailPref) {
            if (usersEmailPref) {
                $emailCheckbox.attr("checked", true);
                $('#emailOffSwitch').hide();
            }
        }

        function setProfilePrivacy(usersProfilePref) {
            if (usersProfilePref) {
                $privacyCheckbox.attr("checked", true);
                $('#profileOffSwitch').hide();
            }
        }

        function usersEmailPref() {

            if ( $emailCheckbox.is(":checked") ) {
                localStorage.emailSetting = "on";
            } else {
                localStorage.emailSetting = "off";
            }

        }

        function usersProfilePref() {

            if ( $privacyCheckbox.is(":checked") ) {
                localStorage.profileSetting = "on";
            } else {
                localStorage.profileSetting = "off";
            }

        }

        ////////////////////////////////////////////
        // EVENT CLICK HANDLER FOR SETTINGS WIDGET
        //  Save Button Function
        ////////////////////////////////////////////

        // Save App Sets "click" Event
        $("#saveBtn").on("click", function(e) {
            //  Store users time zone selection
            localStorage.setItem("timeZone", $("#timezone-select").val());

            usersTimeZone( localStorage.timeZone );

            usersEmailPref();

            usersProfilePref();
            //  Message to confirm saved settings to user.
            var msg = "Settings Saved.";
            var location = $(".save-confirm-msg");
            displayModal(msg, location);
        });

        $(".cancel-btn").on("click", function(e) {
            
            //  Remove :checked attr from slider btns
            $('input[type="checkbox"]').attr('checked', false);

            //  Show <span>off</span> on slider btn
            $('.off-state').show();

            //  Save 'off' state to localStorage for btns
            usersEmailPref();
            usersProfilePref();

            //  Confirm cancel settings
            var msg = "Cancelled Settings";
            var $location = $(".save-confirm-msg");
            //  Reset timezone select
            usersTimeZone("none");
            //  Display confirm cancel msg
            displayModal(msg, $location);

            
        });


    } else {
        console.log("Sorry, local storage is not available in your browser");
    }

    //  Switches Hides <span>off</span> on change
    $("#emailNotification").on("change", function(e) {
      var $offSwitch = $("#emailOffSwitch");
      if( $offSwitch.css("display") === "none") {
        $offSwitch.show();
      } else {
        $offSwitch.hide();
      }
    });

    //  Switches Hides <span>off</span> on change
    $("#profilePrivacy").on("click", function(e) {
      var $offSwitch = $("#profileOffSwitch");
      if( $offSwitch.css("display") === "none") {
        $offSwitch.show();
      } else {
        $offSwitch.hide();
      }
    });

});
//  jQuery Ready();
