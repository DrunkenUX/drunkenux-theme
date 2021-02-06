<?php
//namespace Dux;

// Actions
add_action( 'wp_body_open', 'action_add_gtm_body' );
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
add_action( 'wp_head', 'action_add_gtm_head' );
add_action( 'init', 'register_cpt_advertiser' );
add_action( 'init', 'action_register_template_podcast', 100 );

// Filters
add_filter( 'the_content', 'filter_add_advertiser' );

// Theme Support
add_theme_support( 'post-thumbnails' );

// Remove actions
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );