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

    <?php 
	the_content();

	$ad = get_field( 'advertiser' );
	if( $ad ):
		foreach( $ad as $adObj ):
			$ad_content = apply_filters('the_content', $adObj->post_content);
			$ad_link = get_field( 'link', $adObj->ID );
			$ad_img = get_the_post_thumbnail( $adObj->ID, 'full', array( 'title' => get_the_title( $adObj->ID ) ) );
		endforeach;
		?>
	<div class="ad">'
		<?php echo $ad_content; ?>
		<a href="<?php echo $ad_link; ?>">'
		<?php echo $ad_img; ?>
	</div><!-- .ad -->
	<?php
	endif;
  	?>

    <div class="meta">
        <?php the_tags( 'Tagged with:' ); ?>
    </div><!-- .meta -->
</article><!-- #post-<?php the_ID(); ?> -->
