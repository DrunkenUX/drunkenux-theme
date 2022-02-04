<?php
/**
 * Template part for displaying page banners with image and title
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

$ep_banner = get_field('cmb_thst_feature_post_img_id');
$explicit  = get_post_meta( get_the_ID(), 'explicit', true );

if( isset( $ep_banner ) ): 
    $has_banner = true;
else:
    $has_banner = false;
endif;
?>

<header>        
    <?php if( $has_banner ): ?>
    <div class="background-image" style="background-image:url('<?php echo esc_url($ep_banner['url']); ?>');"></div>
    <?php endif; ?>

    <section class="banner<?php if( $has_banner ): ?> no-banner<?php endif; ?>">
        <?php if( $has_banner ): ?>
        <div class="banner-image">
            <picture>
                <source srcset="<?php echo esc_url($ep_banner['url']); ?>" media="all">
                <img src="<?php echo esc_url($ep_banner['url']); ?>" alt="Listen to <?php the_title(); ?>">
            </picture>
        </div><!-- .banner-image -->
        <?php endif; ?>

        <div class="title-group">
            <div class="tag-label">
                <?php if( !is_page() ) : ?>
                <time datetime="<?php echo get_the_date( 'Y-m-d' ); ?>"><?php the_date( 'F j, Y' ); ?></time>
                <?php endif; ?>

                <?php if( $explicit == 'on' ) : ?>
                <span class="explicit" title="This episode contains some adult language.">Explicit</span>
                <?php endif; ?>
            </div><!-- .tag-label -->

            <h1><?php the_title(); ?></h1>
        </div><!-- .title-group -->

        <?php if( isset( $audio_url ) ): ?>
        <audio id="player" controls>
            <source type="audio/mpeg" src="<?php echo $audio_url; ?>">
        </audio>
        <?php endif; ?>
    </section><!-- .banner -->
</header>