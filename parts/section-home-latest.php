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
<div id="latest-episode">
    <div class="background-image" style="background-image:url('<?php echo esc_url($latest_ep_banner['url']); ?>');"></div>

        <?php
        setup_postdata( $post );
        $featured_id = get_the_ID();
        $audio_url   = get_post_meta( $featured_id, 'audio_file', true );
		?>

    <section class="banner">
		<div class="banner-image">
            <picture>
                <source srcset="<?php echo esc_url($latest_ep_banner['url']); ?>" media="all">
                <img src="<?php echo esc_url($latest_ep_banner['url']); ?>" alt="Listen to <?php the_title(); ?>">
            </picture>
        </div><!-- .banner-image -->

        <div class="title-group">
            <div class="label-latest">
                <span>Latest Episode</span>
            </div><!-- .label-latest -->

            <a href="<?php the_permalink(); ?>" title="View shownotes for <?php the_title(); ?>"><h2><?php the_title(); ?></h2></a>
		</div><!-- .title-group -->

		<audio id="player" controls>
			<source type="audio/mpeg" src="<?php echo $audio_url; ?>">
		</audio>
    </section><!-- .banner -->
</div><!-- #latest-episode -->
    <?php
    endforeach;
endif;
wp_reset_postdata();
