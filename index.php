<?php
 if(isset($_POST['submit']))
 {
    $name = $_POST['name'];
	$email = $_POST['email'];
	$query = $_POST['message'];
	$email_from = $name.'<'.$email.'>';

 //$to="your-email@your-domain.com";
  $to="info@sigma-geophys.com";
 $subject="New message to LLC SIGMA";
 $headers  = 'MIME-Version: 1.0' . "\r\n";
 $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
 $headers .= "From: ".$email_from."\r\n";
 $message="	  
 	   
 		 Name:
		 $name 	   
         <br>
 		 Email-Id:
		 $email 	   
         <br>
 		 Message:
		 $query 	   
      
   ";
	if(mail($to,$subject,$message,$headers))
		header("Location: thankyou.html");
	// else
	// 	header("Location:../contact.php?msg=Error To send Email !");
	// 	//contact:-your-email@your-domain.com
 }
?>
