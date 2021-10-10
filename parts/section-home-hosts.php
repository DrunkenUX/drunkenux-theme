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

 $hosts = get_users([
    'meta_query' => [
        'key' => 'host',
        'value' => 'true'
    ]
 ]);
?>
<section class="home-hosts">
    <h2>Hosts</h2> 

    <div class="hosts-wrapper">
<?php 
foreach($hosts as $host):
    $host_meta = get_user_meta( $host->ID );
    $host_name = $host->display_name;
?>
        <div class="host">
            <?php echo wp_get_attachment_image($host_meta['headshot'][0]); ?>

            <h3><?php echo $host_name; ?></h3>

            <?php echo apply_filters( 'the_content', $host_meta['description'][0] ); ?>
    
            <div class="host-icons">
                <a href="https://github.com/<?php echo $host_meta['github_username'][0]; ?>" class="icon icon-github" title="<?php echo $host_name; ?> on GitHub"></a>
                <a href="https://twitter.com/<?php echo $host_meta['twitter'][0]; ?>" class="icon icon-twitter" title="<?php echo $host_name; ?> on Twitter"></a>
                <a href="<?php echo $host->user_url; ?>" class="icon icon-home" title="<?php echo $host_name; ?>'s other site"></a>
            </div><!-- .host-icons -->
        </div><!-- .host -->
<?php 
endforeach; 
?>
    </div><!-- .hosts-wrapper -->
</section>