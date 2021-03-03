<?php
define('GTM_ID', 'GTM-56PFJ97');

// Are we in a development environment?
$isDev = false;
if( strpos( $_SERVER["HTTP_HOST"], '.local' ) || $_SERVER["HTTP_HOST"] == 'localhost') {
    $isDev = true;
}
define( 'DEV', $isDev );

$min_suffix = '';
if( !DEV ) {
    $min_suffix = '.min';
}
define( 'MIN_SUFFIX', $min_suffix );