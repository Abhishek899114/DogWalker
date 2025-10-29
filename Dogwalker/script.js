document.getElementById('booking-form').onsubmit = function(e) {
  e.preventDefault();
  alert("Thanks for booking! We'll email you confirmation and walk details soon.");
  this.reset();
};
