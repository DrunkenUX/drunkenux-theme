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

global $featured_id;
global $banner_post;

if( is_front_page() ) {
    $latest_ep = get_posts( array(
        'numberposts' => 1,
        'orderby'     => 'date',
        'post_status' => 'publish',
        'post_type'   => 'podcast',
        'sort_order'  => 'DESC'
    ) );

    foreach( $latest_ep as $post ):
        $banner_post = $post;
        $featured_id = $post->ID;
    endforeach;
} else {
    $banner_post = $post;
}

if( !empty( $latest_ep ) ):
    foreach( $latest_ep as $post ):
        $latest_ep_banner = get_field('cmb_thst_feature_post_img_id');
        $latest_ep_explicit  = get_post_meta( get_the_ID(), 'explicit', true );
?>
<header>
    <div class="background-image" style="background-image:url('<?php echo esc_url($latest_ep_banner['url']); ?>');"></div>

        <?php
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
            <div class="tag-label">
                <span>Latest Episode</span>

                <?php if( $latest_ep_explicit == 'on' ) : ?>
                <span class="explicit" title="This episode contains some adult language.">Explicit</span>
                <?php endif; ?>
            </div><!-- .tag-label -->

            <a href="<?php the_permalink(); ?>" title="View shownotes for <?php the_title(); ?>"><h2><?php the_title(); ?></h2></a>
		</div><!-- .title-group -->

		<audio id="player" controls>
			<source type="audio/mpeg" src="<?php echo $audio_url; ?>">
		</audio>
    </section><!-- .banner -->
</header>
    <?php
    endforeach;
endif;
