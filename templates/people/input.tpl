<!DOCTYPE html>
<html>
<head>
	<title>Input Form</title>
</head>
<body>
		<?php if (isset($flash)): ?>
			<?php echo $flash['info'] ?>
		<?php endif ?>
	<form action="/save" method="POST">
		<label for="name">Name</label>
		<input type="text" name="name" id="name"><br>
		<label for="address">Address</label>
		<textarea name="address" id="address" cols="30" rows="10"></textarea><br>
		<label for="phone">Phone</label>
		<input type="text" name="phone" id="phone"><br>
		<label for="email">Email</label>
		<input type="email" name="email" id="email"><br>
		<input type="submit" name="submit" value="Save">
	</form>
</body>
</html>