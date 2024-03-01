<?php

header('Content-Type: application/json');

$to_delete_index= (int)$_POST['index'];
// var_dump( $new_task );

$json_todolist=json_decode(file_get_contents('../data/todolist.json'),true);

unset($json_todolist[$to_delete_index]);

$json_todolist=array_values($json_todolist);

// // // var_dump($json_todolist);

$todo_array=json_encode($json_todolist);

file_put_contents('../data/todolist.json', $todo_array);

echo $todo_array;