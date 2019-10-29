<?php

// get the posted data
$phone = $_POST['phone'];
$hidden = $_POST['hidden'];	
$name = $_POST['name'];
$mail = $_POST['mail'];
$question = $_POST['question'];

		
// write the email content
$email_content  = "Телефон: $phone\n";
$email_content .= "Имя: $name\n";
$email_content .= "Почта: $mail\n";
$email_content .= "Вопрос к специалисту: $question\n\n";

$email_content .= "Комментарии: $hidden\n";



mail ("webpetrash@gmail.com","Заявка с Consul-Translate", $email_content);

?>
<script type="text/javascript">
	setTimeout(function(){ window.location = 'success.html'; }, 0);  
</script>