<?php
/**
 * Template part for displaying the latest blog posts on the homepage
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

global $featured_id;
?>
<section class="home-episodes">
    <h2>Episodes</h2> 

    <?php
    $recent_eps = get_posts( array(
        'exclude'     => $featured_id,
        'numberposts' => 4,
        'orderby'     => 'date',
        'post_status' => 'publish',
        'post_type'   => 'podcast',
        'sort_order'  => 'DESC'
    ) );

    if( !empty( $recent_eps ) ):
        foreach( $recent_eps as $post ):
            setup_postdata( $post );
            $episode_img = get_post_meta( get_the_ID(), '_webdados_fb_open_graph_specific_image');
    ?>

        <a href="<?php the_permalink(); ?>" title="Listen to: <?php the_title(); ?>">
            <img src="<?php echo $episode_img[0]; ?>" alt="Listen to: <?php the_title(); ?>">
            <time datetime="<?php echo get_the_date( 'Y-m-d' ); ?>"><?php the_date( 'M j, Y' ); ?></time>
        </a>

        <?php
        endforeach;
    endif;

    wp_reset_postdata();
    ?>
</section>