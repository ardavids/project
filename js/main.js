function onFormSubmit(e) {
  e.preventDefault();
  const name = $("#inp-name");
  const email = $("#inp-email");
  const message = $("#inp-message");

  if (!$(name).val()) {
    alert("Name is required");
  } else if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(message).val()) {
    alert("Message is required");
  } else {
    alert("Form Submitted");
    $(email).val("");
    $(name).val("");
    $(message).val("");
  }
}

$("#menu-toggle input").click(function () {
  $(".navbar div").toggleClass("active");
});
