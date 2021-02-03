<?php
namespace dux;

// Actions
add_action( 'wp_body_open', __NAMESPACE__ . 'action_add_gtm_body', 0 );
add_action( 'wp_head', __NAMESPACE__ . 'action_add_gtm_head', 0 );
add_action( 'init', __NAMESPACE__ . 'register_cpt_advertiser', 0 );
add_action( 'init', __NAMESPACE__ . 'action_register_template_podcast', 100 );

// Filters
add_filter( 'the_content', __NAMESPACE__ . 'filter_add_advertiser' );
