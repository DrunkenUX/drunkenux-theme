<?php
/**
 * drunkenux-theme functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * @link https://developer.wordpress.org/plugins/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

require_once( 'inc/vars.php' );
require_once( 'inc/post-types.php' );
require_once( 'inc/scripts.php' );
require_once( 'inc/theme-functions.php' );
require_once( 'inc/hooks.php' );
require_once( 'inc/generate-acf-fields.php' );
