<html>
	<head><title>People</title></head>
	<body>
		<?php if (isset($flash)): ?>
			<?php echo $flash['info'] ?>
		<?php endif ?>
		<table>
		<tr><th>Id</th><th>Name</th><th>Address</th><th>Phone</th><th>Email</th></tr>
<?php foreach ($people as $person): ?>
	<tr>
		<td><?php echo $person->id ?></td>
		<td><?php echo $person->name ?></td>
		<td><?php echo $person->address ?></td>
		<td><?php echo $person->phone ?></td>
		<td><?php echo $person->email ?></td>
	</tr>
<?php endforeach ?>
</table>
	</body>
</html>