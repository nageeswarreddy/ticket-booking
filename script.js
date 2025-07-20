document.addEventListener('DOMContentLoaded', () => {
  const eventSelect = document.getElementById('event');
  const ticketInput = document.getElementById('tickets');
  const totalDisplay = document.getElementById('total');
  const bookingForm = document.getElementById('bookingForm');
  const confirmationDiv = document.getElementById('confirmation');

  function updateTotal() {
    const price = parseFloat(eventSelect.selectedOptions[0].getAttribute('data-price'));
    const ticketCount = parseInt(ticketInput.value, 10) || 1;
    totalDisplay.textContent = (price * ticketCount).toFixed(2);
  }

  eventSelect.addEventListener('change', updateTotal);
  ticketInput.addEventListener('input', updateTotal);

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedRoute = eventSelect.options[eventSelect.selectedIndex].text;
    const ticketCount = parseInt(ticketInput.value, 10);
    const total = totalDisplay.textContent;

    confirmationDiv.classList.remove('d-none');
    confirmationDiv.innerHTML = `
      <strong>Booking Confirmed!</strong><br>
      You booked <strong>${ticketCount}</strong> ticket(s) for <strong>${selectedRoute}</strong>.<br>
      Total Paid: ₹<strong>${total}</strong><br>
      Thank you for choosing <strong>NR TRAVELS</strong>!
    `;

    bookingForm.reset();
    updateTotal();
  });

  updateTotal();
});
