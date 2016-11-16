<?php
	$email = $_POST['email'];
	$nome = $_POST['nome'];

	enviarEmail($email,$nome);


	function enviarEmail($email,$nome)
		{
			$arquivo = "
	    <style type='text/css'>
	    body {
	    margin:0px;
	    font-family:Verdane;
	    font-size:13px;
	    color: #666666;
	    }
	    a{
	    color: #666666;
	    text-decoration: none;
	    }
	    a:hover {
	    color: #FF0000;
	    text-decoration: none;
	    }
	    </style>
	    <html>

			<p>Novo cliente: " . $nome . " </p> <p>Email: " . $email . " </p> </html>";

			$emailenviar = "arquiteta@camilaalamino.com.br";
			$destino = "rogersmuk@gmail.com";
			$assunto = "[Arquitetura] Chegou E-mail " . $email;
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$headers .= 'From: Rogério Figueiredo <$email>';
			$enviaremail = mail($destino, $assunto, $arquivo, $headers);
			if($enviaremail){
				$mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
				$redirect = "http://www.camilaalamino.com.br/sucesso.html";
				header("location:$redirect");

			} else {
				$mgm = "ERRO AO ENVIAR E-MAIL!";
				echo "";
		}
	}
	?>

</body>

</html>
