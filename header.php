<?php
/**
 * The template header file
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>

	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/site.webmanifest">
	<link rel="mask-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
</head>

<body <?php body_class('img-loading'); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'drunkenux' ); ?></a>

<header>
	<a id="logo" href="/" title="Return to the Drunken UX homepage">
		<?php $logo_tag = ( is_home() || is_front_page() ) ? 'h1' : 'span'; ?>
		<<?php echo $logo_tag; ?> class="screen-reader-text"><?php bloginfo( 'name' ); ?></<?php echo $logo_tag; ?>>
	</a>

	<div class="button-nav">
		<a class="button" rel="external" href="https://link.chtbl.com/ZLx2VcWd?sid=site.subscribe_button" title="Subscribe to The Drunken UX Podcast">Subscribe</a>

		<button id="menu-toggle" type="button" aria-haspopup="true" aria-controls="menu-top-navigation" aria-expanded="false">Menu</button>
	</div><!-- .button-nav -->

	<nav>
	<?php
	wp_nav_menu( [
		'theme_location' => 'header-menu',
		'container'		 => false,
		'items_wrap'	 => '<ul id="%1$s" class="%2$s" aria-labelledby="menu-toggle" role="menu" hidden>%3$s</ul>'
	] );
	?>
	</nav>
</header>

<main id="content">
