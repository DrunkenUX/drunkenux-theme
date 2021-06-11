<?php
namespace Dux;

// Register Custom Post Type
function register_cpt_advertiser() {
	$labels = array(
		'name'                  => _x( 'Advertisers', 'Post Type General Name', 'drunkenux' ),
		'singular_name'         => _x( 'Advertiser', 'Post Type Singular Name', 'drunkenux' ),
		'menu_name'             => __( 'Advertisers', 'drunkenux' ),
		'name_admin_bar'        => __( 'Advertiser', 'drunkenux' ),
		'archives'              => __( 'Advertiser Archives', 'drunkenux' ),
		'attributes'            => __( 'Advertiser Attributes', 'drunkenux' ),
		'parent_item_colon'     => __( 'Parent Advertiser:', 'drunkenux' ),
		'all_items'             => __( 'All Advertisers', 'drunkenux' ),
		'add_new_item'          => __( 'Add New Advertiser', 'drunkenux' ),
		'add_new'               => __( 'Add New', 'drunkenux' ),
		'new_item'              => __( 'New Advertiser', 'drunkenux' ),
		'edit_item'             => __( 'Edit Advertiser', 'drunkenux' ),
		'update_item'           => __( 'Update Advertiser', 'drunkenux' ),
		'view_item'             => __( 'View Advertiser', 'drunkenux' ),
		'view_items'            => __( 'View Advertisers', 'drunkenux' ),
		'search_items'          => __( 'Search Advertiser', 'drunkenux' ),
		'not_found'             => __( 'Not found', 'drunkenux' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'drunkenux' ),
		'featured_image'        => __( 'Featured Image', 'drunkenux' ),
		'set_featured_image'    => __( 'Set featured image', 'drunkenux' ),
		'remove_featured_image' => __( 'Remove featured image', 'drunkenux' ),
		'use_featured_image'    => __( 'Use as featured image', 'drunkenux' ),
		'insert_into_item'      => __( 'Insert into advertiser', 'drunkenux' ),
		'uploaded_to_this_item' => __( 'Uploaded to this advertiser', 'drunkenux' ),
		'items_list'            => __( 'Advertisers list', 'drunkenux' ),
		'items_list_navigation' => __( 'Advertisers list navigation', 'drunkenux' ),
		'filter_items_list'     => __( 'Filter advertisers list', 'drunkenux' ),
  );
  
	$args = array(
		'label'                 => __( 'Advertiser', 'drunkenux' ),
		'description'           => __( 'Advertiser content for display on podcast episodes', 'drunkenux' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-index-card',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => false,
		'can_export'            => true,
		'has_archive'           => false,
		'exclude_from_search'   => false,
		'publicly_queryable'    => false,
		'rewrite'               => false,
		'capability_type'       => 'post',
		'show_in_rest'          => false,
  );
  
	register_post_type( 'advertiser', $args );
}

// Add custom fields programmatically
if( function_exists('acf_add_local_field_group') ):
	acf_add_local_field_group(array(
		'key' => 'group_5b9fc7f36c06a',
		'title' => 'Additional Podcast Details',
		'fields' => array(
			array(
				'key' => 'field_5a73c06e1f308',
				'label' => 'Followup Resources',
				'name' => 'followup_resources',
				'type' => 'wysiwyg',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 0,
				'tabs' => 'all',
				'delay' => 0,
			),
			array(
				'key' => 'field_5a73bfd216952',
				'label' => 'Transcript Text',
				'name' => 'transcript_text',
				'type' => 'wysiwyg',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 0,
				'tabs' => 'all',
				'delay' => 0,
			),
			array(
				'key' => 'field_5a73df9db4827',
				'label' => 'Advertiser',
				'name' => 'advertiser',
				'type' => 'relationship',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'object',
				'post_type' => array(
					0 => 'advertiser',
				),
				'taxonomy' => array(
				),
				'filters' => array(
					0 => 'search',
				),
				'max' => 1,
				'min' => 0,
				'elements' => '',
			),
			array(
				'key' => 'field_60445471fd116',
				'label' => 'Banner Image',
				'name' => 'cmb_thst_feature_post_img_id',
				'type' => 'image',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
				'preview_size' => 'medium',
				'library' => 'all',
				'min_width' => '',
				'min_height' => '',
				'min_size' => '',
				'max_width' => '',
				'max_height' => '',
				'max_size' => '',
				'mime_types' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'podcast',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
	));
endif;
