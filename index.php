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

if( !empty( $latest_post ) ):
    foreach( $latest_post as $post ):
        setup_postdata( $post );
        $featured_id = get_the_ID();
        $audio_url   = get_post_meta( $featured_id, 'audio_file', true );

        echo '<h2><a href="' . get_the_permalink() . '" title="View shownotes for ' . get_the_title() . '">' . get_the_title() . '</a></h2>';
        echo get_the_post_thumbnail();
        ?>

<audio id="player" controls>
    <source type="audio/mpeg" src="<?php echo $audio_url; ?>">
</audio>

    <?php
    endforeach;
endif;
wp_reset_postdata();
?>

<section>
    <h2>Your Hosts</h2>
</section>

<?php
get_footer();
