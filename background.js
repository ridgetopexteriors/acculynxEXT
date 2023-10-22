// background.js

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "scheduleFollowUp") {
      // Extract data from the message
      const followUpDate = request.followUpDate;
      const priority = request.priority;
      const notes = request.notes;
  
      // Implement your follow-up scheduling logic here.
      // This can include saving the follow-up data to your database, sending notifications, etc.
  
      // For demonstration purposes, let's log the data.
      console.log("Follow-up Date:", followUpDate);
      console.log("Priority:", priority);
      console.log("Notes:", notes);
  
      // You can also send a confirmation message back to the popup script if needed.
      sendResponse({ confirmation: "Follow-up scheduled successfully" });
    } else if (request.type === "performAction") {
      // Extract data from the message for action handling
      const selectedAction = request.selectedAction;
      const messageContent = request.messageContent;
      const recipientEmail = request.recipientEmail;
  
      if (selectedAction === "message" || selectedAction === "email") {
        if (selectedAction === "message") {
          console.log(`Sending message: "${messageContent}" to ${recipientEmail}`);
          // Implement message sending logic here.
        } else {
          console.log(`Sending email: "${messageContent}" to ${recipientEmail}`);
          // Implement email sending logic here.
        }
  
        // Send a confirmation message back to the popup script if needed.
        sendResponse({ confirmation: `${selectedAction} sent successfully` });
      }
    }
  });
  