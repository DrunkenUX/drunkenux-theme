<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */
?>

<section>
    <?php the_content(); ?>

    <div class="meta">
        <p><?php the_tags( '<strong>Tagged with:</strong> ' ); ?>
		<?php 
		if(isset($ep_banner['description'])): 
			echo '<br><strong>Image Credit:</strong> ' . $ep_banner['description'];
		endif;
		?>
		</p>

        <?php get_template_part( 'parts/section', 'comments' ); ?>
    </div><!-- .meta -->
</section>

<?php
get_footer();
