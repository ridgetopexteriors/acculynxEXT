document.addEventListener('DOMContentLoaded', function() {
    const performActionBtn = document.getElementById('performAction');
    const messageContainer = document.getElementById('messageContainer');
    const scheduleFollowUpBtn = document.getElementById('scheduleFollowUp');
    
    performActionBtn.addEventListener('click', function() {
      const selectedAction = document.querySelector('input[name="action"]:checked').value;
      
      if (selectedAction === 'message' || selectedAction === 'email') {
        const messageContent = document.getElementById('messageContent');
        const recipientEmail = document.getElementById('recipientEmail');
        
        if (messageContent && recipientEmail) {
          const messageText = messageContent.value;
          const recipient = recipientEmail.value;
          
          if (selectedAction === 'message') {
            console.log(`Sending message: "${messageText}" to ${recipient}`);
            // Implement message sending logic here.
          } else {
            console.log(`Sending email: "${messageText}" to ${recipient}`);
            // Implement email sending logic here.
          }
        }
      } else {
        console.log('Scheduling a follow-up.');
        // Handle scheduling a follow-up (existing logic).
      }
      
      window.close();
    });
    
    scheduleFollowUpBtn.addEventListener('click', function() {
      const followUpDate = document.getElementById('followUpDate');
      const priority = document.getElementById('priority');
      const notes = document.getElementById('notes');
  
      if (followUpDate && priority && notes) {
        const followUpDateValue = followUpDate.value;
        const priorityValue = priority.value;
        const notesValue = notes.value;
  
        // Implement your scheduling logic here.
        // You can use the data collected from the popup interface.
        // For example, send this data to your background script for processing.
  
        // Example: Sending data to the background script.
        chrome.runtime.sendMessage({
          type: 'scheduleFollowUp',
          followUpDate: followUpDateValue,
          priority: priorityValue,
          notes: notesValue,
        });
  
        // Close the popup after scheduling.
        window.close();
      }
    });
  });
  