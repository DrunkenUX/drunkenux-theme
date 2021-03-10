<?php
/**
 * drunkenux-theme theme hooks, filters, and actions
 *
 * Ties in theme functions into appropriate WordPress hooks
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 *
 * TABLE OF CONTENTS
 *  1. Actions
 *  2. Filters
 *  3. Theme Support
 *  4. Remove Actions
 */

namespace Dux;

// ***** ACTIONS *****
add_action( 'wp_body_open', __NAMESPACE__ . '\action_add_gtm_body' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );
add_action( 'wp_head', __NAMESPACE__ . '\action_add_gtm_head' );
add_action( 'init', __NAMESPACE__ . '\register_cpt_advertiser' );
add_action( 'init', __NAMESPACE__ . '\action_register_menus' );
add_action( 'init', __NAMESPACE__ . '\action_register_template_podcast', 100 );
add_action( 'init', __NAMESPACE__ . '\action_register_sidebars' );

// ***** FILTERS *****
add_filter( 'the_content', __NAMESPACE__ . '\filter_add_advertiser' );

// ***** THEME SUPPORT *****
add_theme_support( 'post-thumbnails' );
add_theme_support( 'title-tag' );

// ***** REMOVE ACTIONS *****
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
