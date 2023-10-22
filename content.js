// Function to handle actions (message or email sending)
function handleAction(selectedAction) {
    if (selectedAction === "message") {
      // Implement message sending logic here.
      console.log("Implement message sending logic");
    } else if (selectedAction === "email") {
      // Implement email sending logic here.
      console.log("Implement email sending logic");
    } else {
      console.log("No valid action selected.");
    }
  }
  
  // Function to send a message to the background script
  function sendMessageToBackgroundScript(data) {
    chrome.runtime.sendMessage(data);
  }
  
  // Get the selected action from the page
  const selectedActionElement = document.querySelector('input[name="action"]:checked');
  
  if (selectedActionElement) {
    const selectedAction = selectedActionElement.value;
    // Handle the selected action
    handleAction(selectedAction);
  
    // Send a message to the background script about the action
    sendMessageToBackgroundScript({ type: "performAction", selectedAction });
  } else {
    console.log("No action selected.");
  }
  