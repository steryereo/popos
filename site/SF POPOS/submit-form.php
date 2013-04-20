<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'yourname@mail.com';  

	// prepare message 
	$body = "You have got new message from your website - Theflow :
	
	Name:  $_POST[name]
	Email:  $_POST[email]
	Subject:  $_POST[subject]
	Message:  $_POST[message]";


	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	mail($youremail, 'Message from Theflow', $body, $headers );

}

?>

<!DOCTYPE HTML>
<html>
<head>
<title>Thanks!</title>
</head>
<body>
<p>Message Sent Successfully.</p>
</body>
</html>