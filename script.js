const eventSelect = document.getElementById('event');
const ticketInput = document.getElementById('tickets');
const totalDisplay = document.getElementById('total');
const form = document.getElementById('bookingForm');
const confirmation = document.getElementById('confirmation');

function updateTotal() {
  const price = parseInt(eventSelect.selectedOptions[0].dataset.price);
  const count = parseInt(ticketInput.value);
  totalDisplay.textContent = price * count;
}

eventSelect.addEventListener('change', updateTotal);
ticketInput.addEventListener('input', updateTotal);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const eventName = eventSelect.options[eventSelect.selectedIndex].text;
  const count = ticketInput.value;
  const total = totalDisplay.textContent;

  confirmation.classList.remove('hidden');
  confirmation.innerHTML = `<strong>Success!</strong> You booked ${count} ticket(s) for <em>${eventName}</em>. Total cost: <strong>$${total}</strong>.`;
  
  form.reset();
  updateTotal();
});

// Initialize total
updateTotal();
