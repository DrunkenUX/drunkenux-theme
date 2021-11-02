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

$audio_url  = get_post_meta( get_the_ID(), 'audio_file', true );
$explicit   = get_post_meta( get_the_ID(), 'explicit', true );
$ep_banner  = get_field('cmb_thst_feature_post_img_id');
$transcript = get_field('transcript_text');
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<?php get_template_part( 'parts/section', 'banner' ); ?>

	<section>
		<p><strong>In this episode:</strong> <?php the_terms(get_the_ID(), 'speaker'); ?></p>

		<h2>Episode Synopsis</h2>

		<?php 
		the_content(); 

		if(isset($transcript) && strlen($transcript)): 
		?>
		<details class="transcript">
			<summary><span class="transcript--closed">Show</span><span class="transcript--open">Hide</span> Transcript</summary>
			<?php echo $transcript; ?>
		</details>
		<?php
		endif;
		?>
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
