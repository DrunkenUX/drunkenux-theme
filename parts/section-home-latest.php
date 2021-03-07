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
        $latest_ep_banner = get_field('cmb_thst_feature_post_img_id');
        //echo $latest_ep_banner;
        ?>
<section id="latest_episode">
    <div class="background-image" style="background-image:url('<?php echo esc_url($latest_ep_banner['url']); ?>');"></div>
	<div class="label-latest">Latest Episode</div>

        <?php
        setup_postdata( $post );
        $featured_id = get_the_ID();
        $audio_url   = get_post_meta( $featured_id, 'audio_file', true );
		?>

    <h2><a href="<?php the_permalink(); ?>" title="View shownotes for <?php the_title(); ?>"><?php the_title(); ?></a></h2>';

	<picture>
		<source srcset="<?php echo esc_url($latest_ep_banner['url']); ?>" media="all">
		<img src="<?php echo esc_url($latest_ep_banner['url']); ?>" alt="Listen to <?php get_the_title(); ?>">
	</picture>

    <audio id="player" controls>
        <source type="audio/mpeg" src="<?php echo $audio_url; ?>">
    </audio>
</section>
    <?php
    endforeach;
endif;
wp_reset_postdata();
