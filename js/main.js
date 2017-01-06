/////////////////////////////////////////////////////
// Element Global Variables
/////////////////////////////////////////////////////
//  Alert Notification Close Btn.
var $alertCloseBtn = $(".close-alert");
// Line Chart Canvas El.
var Linectx = document.getElementById('myLineChart').getContext("2d");
// Bar Chart Canvas El.
var Barctx = document.getElementById('myBarChart').getContext("2d");
// Doughnut Chart Canvas El.
var Piectx = document.getElementById('myPieChart').getContext("2d");



/////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////

function displayModal(msg) {
  var $container = $('.form-confirm-msg');

  $container.prepend(msg)
            .fadeIn()
            .delay(2500)
            .fadeOut(function(e) {
              $(this).text("");
            })
}

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

/////////////////////////////////////////////////////
// Notification Alert
/////////////////////////////////////////////////////

// REMOVES ALERT MSG FROM PAGE ON CLICK
$alertCloseBtn.on('click', function() {
    $this = $(this);
    elGreatGrandparent = $this.parent().parent().parent();
    elGreatGrandparent.fadeOut(1500);
});

//  ADD LIGHT TO BELL.SVG ICON IF THERE ARE MSGS.

/////////////////////////////////////////////////////
//  FORM VALIDATION
/////////////////////////////////////////////////////
$(".form-confirm-msg").hide();

$('button.submit-btn').on('click', function(e) {
    // Stop Submit page refresh on click.
    e.preventDefault();
    //  Modal container

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
      msg += '<p>Please Complete the form with a<br/> <strong>User Name</strong> and <strong>Message</strong></p>';
      displayModal(msg);
    }
    msg = "";
});



/////////////////////////////////////////////////////
//  APP SETTINGS ( LOCAL STORAGE )
/////////////////////////////////////////////////////

if (typeof(Storage) !== "undefined") {
    console.log("storage");
} else {
    console.log("no storage");
}
