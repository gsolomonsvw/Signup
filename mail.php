<?php

$to = "";
$subject = "";
$message = "";
$from = "";
$headers = "From: $from";

mail($to,$subject,$message,$headers);
echo "Mail Sent ";

?>
