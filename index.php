<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one
 * of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query,
 * e.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

get_header();

get_template_part( 'parts/section', 'home-latest' );

get_template_part( 'parts/section', 'home-episodes' );

get_template_part( 'parts/section', 'home-hosts' );

get_template_part( 'parts/section', 'home-blog' );

get_footer();
