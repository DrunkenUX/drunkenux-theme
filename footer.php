<?php
/**
 * The template footer file
 *
 * This is the template that displays everything before the closing </body>.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Drunken UX
 * @subpackage drunkenux-theme
 * @since Drunken UX Theme 2.0
 */
?>
</main>

<footer>
<?php if ( is_active_sidebar( 'footer' ) ) : ?>
  <div class="widgets">
		<?php dynamic_sidebar( 'footer' ); ?>
  </div><!-- .widgets -->
<?php endif; ?>

	<small class="copyright">&copy; 2018-<?php echo date('Y'); ?> Fienen, LLC</small>
</footer>

<?php wp_footer(); ?>

</body>
</html>
