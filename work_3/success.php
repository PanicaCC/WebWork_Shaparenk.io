<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);

// $check = is_array($_POST['check']) ? $_POST['check'] : array();
// $check = implode (', ', $check );

// $radio = htmlspecialchars($_POST["radio"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "info@sandwichbar.ru"; // почта куда придет запрос админу

// содержимое письма с запросом админу 
$tema = "Заявка на установку СендвичБара!";
$message_to_myemail = "Клиент оставил заявку:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: <Sandwichbar.ru> \r\n Reply-To: Sandwichbar \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

// Письмо клиенту после отправки запроса
$tema = "Спасибо за вашу заявку на установку СендвичБара!";
$message_to_myemail = "
С вами ближайшее время свяжеться специалист.
";

$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: Lab Consulting <info@sandwichbar.ru> \r\n Reply-To: Sandwichbar \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

// файл с потенциальными клиентами
$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>
