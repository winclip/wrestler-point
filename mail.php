<?php
if (isset($_POST['calcMessage'])) {
    $calcMessage = $_POST['calcMessage'];
}

 $address1 = "sokhotnikoff@gmail.com";

 $mes1 = '<h1>Заявка с сайта wrestler point</h1><br><br>' . $calcMessage;

 $sub = 'Заявка с сайта wrestler-point.ru'; 
$email = 'you@example.ru';  

$send1 = mail($address1, $sub, $mes1, "Content-type:text/html; charset = utf-8\r\nFrom:$email");

echo json_encode($send1);
return;
