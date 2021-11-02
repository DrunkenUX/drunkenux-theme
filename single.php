<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

$ep_banner  = get_field('cmb_thst_feature_post_img_id');

get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();

	get_template_part( 'parts/content', get_post_type() );
endwhile;

get_footer();
