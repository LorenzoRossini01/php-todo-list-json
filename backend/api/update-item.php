<?php

header('Content-Type: application/json');

$updated_task=[
    'name'=> $_POST['name'],
    'done'=> $_POST['done']==='true',
];
$to_update_index= (int)$_POST['index'];
// var_dump( $new_task );

$json_todolist=json_decode(file_get_contents('../data/todolist.json'),true);

$json_todolist[$to_update_index] = $updated_task;

// // // var_dump($json_todolist);

$todo_array=json_encode($json_task_list);

// file_put_contents('../data/todolist.json', $todo_array);

echo $todo_array;