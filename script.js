<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>

  (function(){
    emailjs.init("YOUR_USER_ID");
  })();

  function sendMail() {
    emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
    .then(function(response) {
       alert("Message sent successfully!");
    }, function(error) {
       alert("Failed to send message.");
    });
  }

// Newsletter subscription form handling
document.getElementById("subscribeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const status = document.getElementById("subscribeStatus");

  if (email) {
    // Simulate success
    status.textContent = "✅ Submitted successfully!";
    status.style.display = "block";

    // Optionally reset form
    this.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      status.style.display = "none";
    }, 5000);
  }
});


