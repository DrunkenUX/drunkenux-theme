<?php
/**
 * The template for displaying all single pages and posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
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
    
    get_template_part( 'parts/section', 'banner' ); ?>

<section>
    <?php the_content(); ?>

    <div class="meta">
        <?php 
        if(isset($ep_banner['description'])): 
            echo '<p><strong>Image Credit:</strong> ' . $ep_banner['description'] . '</p>';
        endif;
        ?>
    </div><!-- .meta -->
</section>

<?php 
endwhile; // End of the loop.

get_footer();
