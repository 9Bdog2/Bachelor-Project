// var exercises = ['Side planks', 'Side push-ups', 'Lunges', 'Sprint', 'Plank', 'Triceps dips', 'Water break', 'Squats', 'Stepping', 'Crunches', 'Push-ups', 'Wall sit', 'Jumping jacks'];
// var exercisesImages = ['images/workouts/workout-12.png', 'images/workouts/workout-11.png', 'images/workouts/workout-10.png', 'images/workouts/workout-09.png', 'images/workouts/workout-08.png', 'images/workouts/workout-07.png', 'images/workouts/water-break.png', 'images/workouts/workout-06.png', 'images/workouts/workout-05.png', 'images/workouts/workout-04.png', 'images/workouts/workout-03.png', 'images/workouts/workout-02.png', 'images/workouts/workout-01.png', ]
// var exercisesTotal = 13;
// var secondsPerExercise = 5;
// var currentExercise = exercisesTotal;
// var currentSecconds = secondsPerExercise;
// var t;
// var timer_is_on = 0;
// var timeGap = false;
    
// function timedCount() {
//     $('.time-left').html(currentSecconds + ' sec');
//     if ( currentExercise > 2 ) {
//         if (currentSecconds > 0) {
//             currentSecconds --;
//             t = setTimeout(function(){timedCount()}, 1000);
//             $('.next-exercise').html('<small>Next</small><br/>'+ exercises[currentExercise-3]);
//         } else {
//             if (!timeGap) {
//                 timeGap = true;
//                 currentSecconds = 3;
//                 t = setTimeout(function(){timedCount()}, 1000);
//                 currentExercise --;
//                 document.getElementById("current-workout-picture").src = 'images/workouts/short-break.png';
//                 $('.next-exercise').html('<small>Next</small><br/>'+ exercises[currentExercise-2]);
//             } else {
//                 currentSecconds = secondsPerExercise;
//                 document.getElementById("current-workout-picture").src = exercisesImages[currentExercise-2];
//                 timeGap = false;
//                 t = setTimeout(function(){timedCount()}, 1000);
//             }
//         };
//     } else {
//         $('.page-overlay').addClass('active');
//         $('.finish-exercise-popup').addClass('active');
//         stopCount();
//     }
// }

// function startCount() {
//     if (!timer_is_on) {
//         timer_is_on = 1;
//         timedCount();
//     }
// }

// function stopCount() {
//     clearTimeout(t);
//     timer_is_on = 0;
// }


    