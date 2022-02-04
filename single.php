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

get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<?php
	get_template_part( 'parts/section', 'banner' );

	get_template_part( 'parts/content', get_post_type() );
endwhile;
?>

</article><!-- #post-<?php the_ID(); ?> -->

<?php get_footer();
