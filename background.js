// Your Axios code can now be used here
axios.post(url, data)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });

// Assuming 'api' is a custom library for interacting with your API
(require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).getCompanySettings()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));


(require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).server('https://api.acculynx.com/api/v2');
(require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).getAppointmentById({calendarId: 'calendarId', appointmentId: 'appointmentId'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

// Set the base URL for the server
(require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).server('https://api.acculynx.com/api/v2/');

const sdk = require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q');

(require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).getUsers({pageStartIndex: '0'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

// Define the data and configuration for your POST request
const postData = {
  // Add your POST request data here
};

const postConfig = {
  method: 'post', // Use 'post' method for POST requests
  url: 'https://api.acculynx.com/api/v2/users',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  },
  data: postData
};

// Make the POST request using Axios
axios(postConfig)
  .then(response => {
    // Check if the POST request was successful
    if (response.status === 200) {
      // Your POST request was successful
      // Now, you can make the GET request using the sdk library
      (require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).getAppointments({ pageStartIndex: '0', calendarId: 'calendarId' })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      console.error('POST request failed');
    }
  })
  .catch(error => {
    console.error(error);
  });

// Additional GET Request
(require('api')('@acculynxapi/v1.0#1ypjsg71hlmi7qt7q')).getCalendars({ pageStartIndex: '0' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

const baseUrl = 'https://api.acculynx.com/api/v2/calendars';

// Your API key
const apiKey = 'MWE1OWFhMGEtMjlkYS00MWVmLThiZTYtZmMxNDY4YzVlMGNjN2UzNTg3M2EtMmB9ZC00NWEwLWI4NWMtMWRlN2FlODMxZDk0';

// Function to fetch appointment data
async function fetchAppointmentData(calendarId, appointmentId) {
  try {
    const response = await axios.get(`${baseUrl}/calendar/${calendarId}/appointment/${appointmentId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const appointmentData = response.data;
    console.log('Fetched Appointment Data:', appointmentData);

    // You can further process the appointmentData as needed
  } catch (error) {
    console.error('Error fetching appointment data:', error);
  }
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "scheduleFollowUp" || request.type === "performAction") {
    // Extract data from the message
    const followUpDate = request.followUpDate;
    const priority = request.priority;
    const notes = request.notes;

    if (request.type === "scheduleFollowUp") {
      // Implement your follow-up scheduling logic here.
      // This can include saving the follow-up data to your database, sending notifications, etc.

      // For demonstration purposes, let's log the data.
      console.log("Follow-up Date:", followUpDate);
      console.log("Priority:", priority);
      console.log("Notes:", notes);
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
  } else if (request.type === "fetchAppointmentData") {
    // Extract calendarId and appointmentId from the request
    const { calendarId, appointmentId } = request;

    // Call the fetchAppointmentData function with the provided IDs
    fetchAppointmentData(calendarId, appointmentId);
  }
});
