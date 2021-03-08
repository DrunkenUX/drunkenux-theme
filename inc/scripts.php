<?php
namespace Dux;

function enqueue_scripts() {
  $custom_js_path    = get_stylesheet_directory_uri() . '/assets/js/custom' . MIN_SUFFIX . '.js';
  $vendor_js_path    = get_stylesheet_directory_uri() . '/assets/js/vendor' . MIN_SUFFIX . '.js';
  $styles_css_path   = get_stylesheet_directory_uri() . '/style' . MIN_SUFFIX . '.css';

  // CSS
  wp_enqueue_style('main', $styles_css_path, null, null);
	if( DEV ) {
    //wp_enqueue_style('a11y', get_stylesheet_directory_uri() . '/assets/css/a11y.css', null, null);
  }

  // JavaScript
  wp_register_script('vendor-script', $vendor_js_path, null, null, true);
  wp_enqueue_script('vendor-script');
  wp_register_script('custom-script', $custom_js_path, array( 'vendor-script' ), null, true);
  wp_enqueue_script('custom-script');
}
