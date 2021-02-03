<?php
namespace dux;

// Action functions

// Output iframe noscript GTM include
function action_add_gtm_body() {
  echo '<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' . GTM_ID . '"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->';
}

// Output script GTM include
function action_add_gtm_head() {
  echo "<!-- Google Tag Manager -->
<script>
  window.dataLayer = window.dataLayer || [];
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','" . GTM_ID . "');
</script>
<!-- End Google Tag Manager -->";
}

// Register block template for podcast CPT
function action_register_template_podcast() {
  $post_type_object = get_post_type_object( 'podcast' );
  $post_type_object->template = array(
    array( 'core/paragraph', array(
      'placeholder' => 'Add show summary...'
    ) ),
    array( 'core/more' ),
    array( 'core/heading', array(
      'content' => 'Followup Resources'
    ) ),
    array( 'core/list', array(
      'placeholder' => 'Add supporting article links...'
    ) ),
    array( 'core/heading', array(
      'content' => 'Transcript'
    ) ),
    array( 'core/paragraph', array(
      'content' => 'The following is a machine-generated transcript of this episode. It will contain errors until it has been reviewed and edited, and we apologize for the difficulty that may cause for screen readers. Do you want to help us speed up our transcribing process? Consider <a href="/talk-to-us/advertise/">sponsoring an episode</a>.'
    ) ),
    array( 'core/html', array(
      'content' => '<p style="text-align:center;"><button id="transcript-toggle" class="butn small"><span>Show</span><span style="display: none;">Hide</span> Full Transcript</button></p>
<div id="transcript">
  Add formatted HTML transcript...
</div>'
    ) )
  );
}

// Filter functions

// Attaches sponsor message to page content (consider changing this to a block or template part)
function filter_add_advertiser( $content ) {
  // Check if we're inside the main loop in a single post page.
  if ( is_single( 'podcast' ) && in_the_loop() && is_main_query() ) {
    return $content . dux_render_ad();
  }

  return $content;
}

// Other functions

// Generate ad markup for podcast episode pages
function dux_render_ad() {
  $ad = get_field( 'advertiser' );
  
  if( $ad ):
    foreach( $ad as $adObj ):
      $ad_content = apply_filters('the_content', $adObj->post_content);
      $ad_link    = get_field( 'link', $adObj->ID );
      $ad_img     = get_the_post_thumbnail( $adObj->ID, 'full', array( 'title' => get_the_title( $adObj->ID ) ) );
    endforeach;

    return '<div class="ad">'
    . $ad_content
    . '<a href="' . $ad_link . '">'
    . $ad_img
    . '</div>  <!-- .ad -->';
  endif;

  return;
}