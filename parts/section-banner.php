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

$explicit  = get_post_meta( get_the_ID(), 'explicit', true );
?>

<header>
    <div class="background-image" style="background-image:url('<?php echo esc_url($ep_banner['url']); ?>');"></div>

    <section class="banner">
        <div class="banner-image">
            <picture>
                <source srcset="<?php echo esc_url($ep_banner['url']); ?>" media="all">
                <img src="<?php echo esc_url($ep_banner['url']); ?>" alt="Listen to <?php the_title(); ?>">
            </picture>
        </div><!-- .banner-image -->

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