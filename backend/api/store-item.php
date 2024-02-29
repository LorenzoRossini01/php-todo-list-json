<?php

header('Content-Type: application/json');

$new_task=$_POST['item'];


var_dump( $new_task );

// $json_todolist=json_decode(file_get_contents('../data/todolist.json'),true);

// $todo_array=json_encode($json_task_list);

// $json_todolist[] = $new_task[];

// // var_dump($json_todolist);


// file_put_contents('../data/todolist.json', $todo_array);


// echo $todo_array;