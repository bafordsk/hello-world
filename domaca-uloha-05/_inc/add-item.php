<?php

	// include
	require 'config.php';

	// add new stuff
	$id = $database->insert('items', [
		'text' => $_POST['message']
	]);

	// success?
	if ( ! $id ) die('error');

	if ( is_ajax() )
	{
		header('Content-Type: application/json');

		$message = json_encode([
			'status' => 'success',
			'id' => $id
		]);

		die( $message );
	}
	else
	{
		redirect();
	}