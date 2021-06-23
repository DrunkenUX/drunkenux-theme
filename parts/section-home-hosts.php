<?php
/**
 * Template part for displaying the host info on the homepage
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */

 $host           = get_userdata( 1 );
 $otherOtherHost = get_userdata( 2 );
?>
<section class="home-hosts">
    <h2>Hosts</h2> 

    <div class="hosts-wrapper">
        <div class="host">
            <?php echo $host->display_name; ?>
        </div><!-- .host -->

        <div class="host">
            <?php echo $otherOtherHost->display_name; ?>
        </div><!-- .host -->
    </div><!-- .hosts-wrapper -->
</section>