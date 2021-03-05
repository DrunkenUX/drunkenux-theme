<?php
/**
 * Template part for displaying the latest blog posts on the homepage
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */
?>
<section>
    <h2>From the Blog</h2> 

    <ul>
    <?php
    $latest_posts = get_posts( array(
        'numberposts' => 4,
        'orderby'     => 'date',
        'post_status' => 'publish',
        'post_type'   => 'post',
        'sort_order'  => 'DESC'
    ) );

    if( !empty( $latest_posts ) ):
        foreach( $latest_posts as $post ):
            setup_postdata( $post );
            ?>

        <li>
            <?php echo get_avatar( get_the_author_meta( 'ID' ), 32, null, 'This article is written by' . get_the_author_meta( 'display_name' ) ); ?>
            <a href="<?php echo the_permalink(); ?>" title="Read the post: <?php echo the_title(); ?>"><?php echo the_title(); ?></a>
        </li>

        <?php
        endforeach;
    endif;
    wp_reset_postdata();
    ?>
    </ul>
</section>