<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

get_header();
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('podcast'); ?>>
    <header>
		<div class="background-image" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/jpg/404.jpg');"></div>

		<section class="banner">
			<div class="title-group">
				<h1>Sorry, can't find that!</h1>
			</div><!-- .title-group -->
		</section><!-- .banner -->
	</header>

	<section>
		<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try a search?', 'drunkenux' ); ?></p>
		
		<?php get_search_form(); ?>

		<p><small>Header Photo by <a href="https://unsplash.com/@dav420?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Pupaza</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></small></p>
	</section>
</article><!-- #post-<?php the_ID(); ?> -->

<?php
get_footer();