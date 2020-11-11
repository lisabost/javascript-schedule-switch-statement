$(document).ready(function () {
        //event handlers
        $("form").submit(dayOfWeekSchedule);

        
        //other functions
        function dayOfWeekSchedule(event) {
            //prevent default from happening
            event.preventDefault();

            // jQuery get me the box that is checked
            var day = $("input[name=dayOfWeek]:checked").val();

            // decide what to do with that value
            switch (day) {
                case "monday":
                    $("#event1").text("JavaScript Class, 12pm - 3:40pm");
                    $("#event2").text("Homework, 4pm - 6pm");
                    break;
                case "tuesday":
                    $("#event1").text("Work, 9pm - 5pm");
                    $("#event2").text("Video Games, 6pm - 10pm");
                    break;
                case "wednesday":
                    $("#event1").text("JavaScript Class, 12pm - 3:40pm");
                    $("#event2").text("Homework, 4pm - 6pm");

                    break;
                case "thursday":
                    $("#event1").text("Work, 9pm - 5pm");
                    $("#event2").text("Video Games, 6pm - 10pm");

                    break;
                case "friday":
                    $("#event1").text("Work, 9pm - 5pm");
                    $("#event2").text("Video Games, 6pm - 10pm");
                    break;
                case "saturday":
                    $("#event1").text("Baking Treats, 8am - 12pm");
                    $("#event2").text("Cleaning the House, 1pm - 3pm");
                    break;
                case "sunday":
                    $("#event1").text("Video Games or TV, 9am - 12pm");
                    $("#event2").text("Video Games with Friends, 2pm - 11pm");
                    break;
                default:
                    $("#event1").text("JavaScript Class, 12pm - 3:40pm");
                    $("#event2").text("Homework, 4pm - 6pm");
                    break;
            }
        }
    }
);