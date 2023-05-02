<?php
// connect to db
$database = new medoo([
'database_type' => 'mysql',
'database_name' => 'todo',
'server'        => 'localhost',
'username'      => 'root',
'password'      => 'root',
'charset'       => 'utf8'
]);