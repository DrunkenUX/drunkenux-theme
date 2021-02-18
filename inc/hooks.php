<?php
namespace Dux;

// Actions
add_action( 'wp_body_open', __NAMESPACE__ . '\action_add_gtm_body' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );
add_action( 'wp_head', __NAMESPACE__ . '\action_add_gtm_head' );
add_action( 'init', __NAMESPACE__ . '\register_cpt_advertiser' );
add_action( 'init', __NAMESPACE__ . '\action_register_template_podcast', 100 );

// Filters
add_filter( 'the_content', __NAMESPACE__ . '\filter_add_advertiser' );

// Theme Support
add_theme_support( 'post-thumbnails' );

// Remove actions
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );