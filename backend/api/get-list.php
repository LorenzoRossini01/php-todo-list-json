<?php
header("Content-Type: application/json");

$json_task_list = json_decode(file_get_contents("../data/todolist.json"), true);

// var_dump($json_task_list);

$todo_array=json_encode($json_task_list);

echo $todo_array;