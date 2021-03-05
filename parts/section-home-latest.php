<?php
/**
 * Template part for displaying the latest podcast episode on the homepage
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

$latest_ep = get_posts( array(
    'numberposts' => 1,
    'orderby'     => 'date',
    'post_status' => 'publish',
    'post_type'   => 'podcast',
    'sort_order'  => 'DESC'
) );

if( !empty( $latest_ep ) ):
    foreach( $latest_ep as $post ):
        setup_postdata( $post );
        $featured_id = get_the_ID();
        $audio_url   = get_post_meta( $featured_id, 'audio_file', true );

        echo '<h2><a href="' . get_the_permalink() . '" title="View shownotes for ' . get_the_title() . '">' . get_the_title() . '</a></h2>';
        echo get_the_post_thumbnail( get_the_ID(), 'medium', array( 'alt' => 'Listen to ' . get_the_title() ) );
        ?>

<audio id="player" controls>
    <source type="audio/mpeg" src="<?php echo $audio_url; ?>">
</audio>

    <?php
    endforeach;
endif;
wp_reset_postdata();