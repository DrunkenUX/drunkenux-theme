<?php
/**
 * Display the sponsor of a given episode
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 * @uses the_post() must be called inside The Loop
 */

$ad = get_field( 'advertiser' );
if( $ad ):
	foreach( $ad as $adObj ):
		$ad_content = apply_filters('the_content', $adObj->post_content);
		$ad_link    = get_field( 'link', $adObj->ID );
		$ad_sponsor = $adObj->post_title;
		$ad_img     = get_the_post_thumbnail( $adObj->ID, 'full', array( 'alt' => 'Logo of ' . $ad_sponsor ) );
	endforeach;
	?>

<div class="ad">
	<section>
		<?php echo $ad_content; ?>

		<a href="<?php echo $ad_link; ?>" title="Visit our sponsor, <?php echo $ad_sponsor; ?>">
			<?php echo $ad_img; ?>
		</a>
	</section>
</div><!-- .ad -->

<?php
endif;
