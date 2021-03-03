<?php
/**
 * Template part for displaying podcast episodes
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

$audio_url = get_post_meta( get_the_ID(), 'audio_file', true );
$explicit  = get_post_meta( get_the_ID(), 'explicit', true );
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header>
		<time datetime="<?php echo get_the_date( 'Y-m-d' ); ?>"><?php the_date( 'F j, Y' ); ?></time>

		<?php if( $explicit == 'on' ) : ?>
		<span class="explicit" title="This episode contains some adult language.">Explicit</span>
		<?php endif; ?>

		<h1><?php the_title(); ?></h1>

		<audio id="player" controls>
			<source type="audio/mpeg" src="<?php echo $audio_url; ?>">
		</audio>
	</header>

    <?php the_content(); ?>

    <div class="meta">
        <?php the_tags( 'Tagged with:' ); ?>
    </div><!-- .meta -->
</article><!-- #post-<?php the_ID(); ?> -->
