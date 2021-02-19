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

$latest_post = get_posts( array(
    'numberposts' => 1,
    'orderby'    => 'date',
    'post_status' => 'publish',
    'post_type' => 'podcast',
    'sort_order' => 'DESC'
) );

if( ! empty( $latest_post ) ):
    foreach( $latest_post as $post ):
        setup_postdata( $post );
        echo the_title();

        $featured_id = get_the_ID();
    endforeach;
endif;
wp_reset_postdata();

echo '<p>' . $featured_id . '</p>';
get_footer();