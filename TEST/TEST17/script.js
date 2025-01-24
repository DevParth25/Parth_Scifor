$(document).ready(function () {
    let count = 0;
  
    // Function to display the status message
    function showStatusMessage(action) {
      const $status = $('#status-message');
      $status.text(`Counter ${action}!`).removeClass('hidden');
  
      // Hide the message after 2 seconds
      setTimeout(() => {
        $status.addClass('hidden');
      }, 2000);
    }
  
    // Increment button functionality
    $('#increment-btn').click(function () {
      count++;
      $('#count').text(count);
      console.log(`Incremented count to ${count}`);
      showStatusMessage('incremented');
    });
  
    // Decrement button functionality
    $('#decrement-btn').click(function () {
      count--;
      $('#count').text(count);
      console.log(`Decremented count to ${count}`);
      showStatusMessage('decremented');
    });
  });
  