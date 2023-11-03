// axios
import axios from 'axios';

// Your Axios code can now be used here
axios.post(url, data)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });

document.addEventListener('DOMContentLoaded', function() {
  const performActionBtn = document.getElementById('performAction');
  const scheduleFollowUpBtn = document.getElementById('scheduleFollowUp');

  // Function to handle actions (message or email sending)
  function handleAction(selectedAction) {
    if (selectedAction === 'message' || selectedAction === 'email') {
      const messageContent = document.getElementById('messageContent');
      const recipientEmail = document.getElementById('recipientEmail');

      if (messageContent && recipientEmail) {
        const messageText = messageContent.value;
        const recipient = recipientEmail.value;

        if (selectedAction === 'message') {
          console.log(`Sending message: "${messageText}" to ${recipient}`);
          // Make an API request to send a message using AccuLynx API
          sendAccuLynxMessage(recipient, messageText);
        } else {
          console.log(`Sending email: "${messageText}" to ${recipient}`);
          // Make an API request to send an email using AccuLynx API
          sendAccuLynxEmail(recipient, messageText);
        }
      }
    } else {
      console.log('Scheduling a follow-up.');
      // Handle scheduling a follow-up (existing logic).
      // You can send data to your background script for further processing.
    }

    window.close();
  }

  // Function to send a message using AccuLynx API
  function sendAccuLynxMessage(recipient, message) {
    const calendarId = 'yourCalendarId'; // Set the calendar ID as needed
    const apiKey = 'NjRmMDYxODAtYTc3Mi00ODEyLWIyZmEtODFhY2E4Yzc4OTg3YjcyMDY0YjgtOTIzMy00MGE3LTkzZWUtNTllODg2NGI1YmM3'; // Replace with your actual API key
    const apiEndpoint = 'https://api.acculynx.com/api/v2/calendars'; // Replace with your API endpoint

    // Make an API request to send a message using AccuLynx API
    axios.post(`${apiEndpoint}/messages?calendarId=${calendarId}`, {
      recipient: recipient,
      message: message,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Message sent successfully:', response.data);
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  }

  // Function to send an email using AccuLynx API
  function sendAccuLynxEmail(recipient, emailContent) {
    const calendarId = 'yourCalendarId'; // Set the calendar ID as needed
    const apiKey = 'NjRmMDYxODAtYTc3Mi00ODEyLWIyZmEtODFhY2E4Yzc4OTg3YjcyMDY0YjgtOTIzMy00MGE3LTkzZWUtNTllODg2NGI1YmM3'; // Replace with your actual API key
    const apiEndpoint = 'https://api.acculynx.com/api/v2/calendars'; // Replace with your API endpoint

    // Make an API request to send an email using AccuLynx API
    axios.post(`${apiEndpoint}/emails?calendarId=${calendarId}`, {
      recipient: recipient,
      content: emailContent,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Email sent successfully:', response.data);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  }

  // Function to schedule a follow-up using AccuLynx API
  function scheduleAccuLynxFollowUp(date, priority, notes) {
    const calendarId = 'yourCalendarId'; // Set the calendar ID as needed
    const apiKey = 'NjRmMDYxODAtYTc3Mi00ODEyLWIyZmEtODFhY2E4Yzc4OTg3YjcyMDY0YjgtOTIzMy00MGE3LTkzZWU=';
    const apiEndpoint = 'https://api.acculynx.com/api/v2/calendars';

    axios.post(`${apiEndpoint}/follow-ups?calendarId=${calendarId}`, {
      date: date,
      priority: priority,
      notes: notes,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Follow-up scheduled successfully:', response.data);
    })
    .catch(error => {
      console.error('Error scheduling follow-up:', error);
    });
  }
  // JavaScript to handle file upload

// Add a change event listener to the file input element
document.getElementById('excelFile').addEventListener('change', handleFileSelect);

// Function to handle file selection
function handleFileSelect(event) {
  const fileInput = event.target;
  const files = fileInput.files;

  if (files.length > 0) {
    // Handle the selected file, e.g., you can access it using files[0]
    const selectedFile = files[0];
    console.log('Selected file:', selectedFile.name);
  }
}

// Add a click event listener to the upload label
document.getElementById('uploadLabel').addEventListener('click', function () {
  // Trigger the file input when the label is clicked
  document.getElementById('excelFile').click();
});

});
