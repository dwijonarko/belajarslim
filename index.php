<?php 
session_start();
require 'vendor/autoload.php';

$app = new \Slim\Slim();

ORM::configure(array(
    'connection_string' => 'mysql:host=localhost;dbname=belajarslim',
    'username' => 'root',
    'password' => 'root'
));

$app->get('/', function () use ($app) {
   $people = ORM::for_table('people')->find_many();
   $app->render('people/index.tpl',array('people'=>$people));
});

$app->get('/input', function() use($app){
	$app->render('people/input.tpl');
});

$app->post('/save',function() use($app){
	$people = ORM::for_table('people')->create();
	$people->name = $app->request->post('name');
	$people->address = $app->request->post('address');
	$people->email = $app->request->post('email');
	$people->phone = $app->request->post('phone');
	try {
		$people->save();
	}catch(PDOException $error){
		$app->flash('info', $error->getMessage());
        $app->redirect('/input');
	}
	$app->flash('info', 'Data saved successfully');
	$app->redirect('/');
});

$app->get('/login',function() use($app){
  $app->render('api/login.tpl');
});

$app->get('/tasks',function() use($app){
  $app->render('api/tasks.tpl');
});

$app->run();
