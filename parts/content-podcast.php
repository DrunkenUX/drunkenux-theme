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
$ep_banner = get_field('cmb_thst_feature_post_img_id');
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
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
					<time datetime="<?php echo get_the_date( 'Y-m-d' ); ?>"><?php the_date( 'F j, Y' ); ?></time>
				
					<?php if( $explicit == 'on' ) : ?>
					<span class="explicit" title="This episode contains some adult language.">Explicit</span>
					<?php endif; ?>
				</div><!-- .tag-label -->

				<a href="<?php the_permalink(); ?>" title="View shownotes for <?php the_title(); ?>">
					<h1><?php the_title(); ?></h1>
				</a>
			</div><!-- .title-group -->

			<audio id="player" controls>
				<source type="audio/mpeg" src="<?php echo $audio_url; ?>">
			</audio>
		</section><!-- .banner -->
	</header>

	<section>
		<p><strong>In this episode:</strong> <?php the_terms(get_the_ID(), 'speaker'); ?></p>

		<h2>Episode Synopsis</h2>

		<?php the_content(); ?>
	</section>

	<?php get_template_part( 'parts/section', 'sponsor' ); ?>

	<section>
		<div class="meta">
			<p><?php the_tags( '<strong>Tagged with:</strong> ' ); ?>
			<?php 
			if(isset($ep_banner['description'])): 
				echo '<br><strong>Image Credit:</strong> ' . $ep_banner['description'];
			endif;
			?>
			</p>

			<?php get_template_part( 'parts/section', 'comments' ); ?>
		</div><!-- .meta -->
	</section>
</article><!-- #post-<?php the_ID(); ?> -->
