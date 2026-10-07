const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  toast.textContent = "Reservation request received — we’ll confirm your table soon.";
  toast.classList.add("show");
  bookingForm.reset();

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
});
