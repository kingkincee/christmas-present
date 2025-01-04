document.getElementById('submit-button').addEventListener('click', function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the value of the textarea
    const message = document.getElementById('message-input').value;

    // Check if the message is not empty
    if (message.trim() !== "") {
        // Create a new list item (li) for the message
        const li = document.createElement('li');
        li.textContent = message;

        // Append the new message to the message list
        document.getElementById('message-ul').appendChild(li);

        // Clear the input field after submitting the message
        document.getElementById('message-input').value = "";
    } else {
        // If the message is empty, show an alert
        alert("Please enter a message before submitting.");
    }
});
