<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Format data
    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    // Save data to file
    $file = 'contacts.txt';
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // Redirect back to the contact form
    header("Location: contact.html");
    exit;
}
?>
