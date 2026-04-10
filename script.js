document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name1');
  const emailInput = document.getElementById('email1');
  const messageInput = document.getElementById('message1');
  const sendBtn = document.getElementById('button1');

  if (!nameInput || !emailInput || !messageInput || !sendBtn) {
    console.error('Form elements not found. Check IDs: name1, email1, message1, button1');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  sendBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) {
      alert('Please enter your name (at least 2 characters).');
      nameInput.focus();
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    if (message.length < 5) {
      alert('Please enter your message (at least 5 characters).');
      messageInput.focus();
      return;
    }

    alert('Form submitted successfully!');
  });
});
