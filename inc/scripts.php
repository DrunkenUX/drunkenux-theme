<?php
namespace Dux;

function enqueue_scripts() {
/* 
  $custom_js_path    = get_stylesheet_directory_uri() . '/assets/js/custom' . $min_suffix . '.js';
  $modernizr_js_path = get_stylesheet_directory_uri() . '/assets/js/modernizr-custom.js';
*/

  $vendor_js_path    = get_stylesheet_directory_uri() . '/assets/js/vendor' . MIN_SUFFIX . '.js';
  $styles_css_path   = get_stylesheet_directory_uri() . '/style.css';
/*
  $editor_css_path   = get_stylesheet_directory_uri() . '/editor' . $min_suffix . '.css';
  
  if( is_user_logged_in() ) {
    wp_enqueue_style('theme-editor', $editor_css_path, array( 'wp-edit-blocks' ), null);
  }
*/
  wp_enqueue_style('main', $styles_css_path, null, null);
/*
  wp_enqueue_script('modernizr', $modernizr_js_path, null, null, false);
  wp_register_script('custom-script', $custom_js_path, array( 'vendor-script' ), null, true);
  wp_enqueue_script('custom-script');
*/
  wp_register_script('vendor-script', $vendor_js_path, array( 'jquery' ), null, true);
  wp_enqueue_script('vendor-script');
}