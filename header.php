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

	<link rel="apple-touch-icon" sizes="76x76" href="/wp-content/themes/drunkenux-theme/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/wp-content/themes/drunkenux-theme/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/wp-content/themes/drunkenux-theme/icons/favicon-16x16.png">
	<link rel="manifest" href="/wp-content/themes/drunkenux-theme/icons/site.webmanifest">
	<link rel="mask-icon" href="/wp-content/themes/drunkenux-theme/icons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="/wp-content/themes/drunkenux-theme/icons/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="/wp-content/themes/drunkenux-theme/icons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'drunkenux' ); ?></a>

<header>
	<h1>The Drunken UX Podcast</h1>

	<nav>
	<?php
	wp_nav_menu( [
		'theme_location' => 'header-menu',
		'container' => false,
	] );
	?>
	</nav>
</header>

<div id="page" class="site">
	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">