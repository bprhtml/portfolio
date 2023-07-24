<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $companyName = $_POST["compName"];
    $emailAddress = $_POST["email"];
    $phoneNumber = $_POST["phoneNum"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "bprhtml@gmail.com"; // Replace with your email address

    // Set subject of the email
    $subject = "Portfolio contact form submission: $firstName $lastName";

    // Compose the email body
    $emailBody = "Name: $firstName $lastName\n";
    $emailBody .= "Company: $companyName\n";
    $emailBody .= "Email: $emailAddress\n";
    $emailBody .= "Phone Number: $phoneNumber\n";
    $emailBody .= "Message: $message\n";

    // Set headers
    $headers = "From: $emailAddress\r\n";
    $headers .= "Reply-To: $emailAddress\r\n";

    // Send the email
    $mailSent = mail($to, $subject, $emailBody, $headers);

    // Check if the email was sent successfully
    if ($mailSent) {
        echo "success"; // You can send a response back to the client if needed
    } else {
        echo "error"; // Or you can handle errors accordingly
    }
}
?>
