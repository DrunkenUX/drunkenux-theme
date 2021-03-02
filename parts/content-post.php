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
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h1><?php the_title(); ?></h1>

    <p>We wrote this on <time datetime="<?php echo get_the_date( 'Y-m-d' ); ?>"><?php the_date( 'F j, Y' ); ?></time></p>

    <?php the_content(); ?>

    <div class="meta">
        <?php the_tags( 'Tagged with:' ); ?>
    </div><!-- .meta -->
</article><!-- #post-<?php the_ID(); ?> -->