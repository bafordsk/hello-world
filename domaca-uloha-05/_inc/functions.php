<?php
// global functions
function show_404()
{
    header("HTTP/1.0 404 Not Found");
    include_once "404.php";
    die();
}

// redirect
function redirect()
{
    global $base_url;
    header( "location: $base_url/index.php");
    die();
}

function get_item()
{
    // if we have no id, or if id is empty
    if ( ! isset($_GET['id']) || empty($_GET['id']) ) {
        return false;
    }

    global $database;

    $item = $database->get("items", "text", [
        "id" => $_GET['id']
    ]);

    if ( ! $item ) {
        return false;
    }

    return $item;
}


function is_ajax()
{
    return ( !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
        strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest' );
}
