$(document).ready(function() {
  $("#tweet-text").on("keyup keydown", function() {
    let numberOfCharacters = $(this).val().length;
    let remainder = $(this).siblings(".counter")[0];
    remainder.value = 140 - numberOfCharacters;

    if (remainder.value < 0) {
      $(this).nextAll(".counter").css("color", "red");
        } else {
      $(this).nextAll(".counter").css("color", "grey");
    }
  });
});
