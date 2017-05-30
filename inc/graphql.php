<?php
/**
 * This file is used to hook into the WPGraphQL plugin to provide additional functionality for our app
 */
use WPGraphQL\Types;

/**
 * We're filtering the fields on the "post" type in the GraphQL schema to provide additional fields
 */
add_filter( 'graphql_post_fields', function( $fields ) {

	$fields['releaseDate'] = [
		'type'        => Types::string(),
		'description' => __( 'The date the film was released', 'graphql-workshop' ),
		'resolve'     => function( \WP_Post $post, array $args, \WPGraphQL\AppContext $context, \GraphQL\Type\Definition\ResolveInfo $info ) {

			$release_date = get_post_meta( $post->ID, 'release_date', true );
			$timestamp    = strtotime( $release_date );

			return ( false !== $timestamp ) ? date( 'M j, Y', $timestamp ) : null;
		},
	];

	return $fields;

}, 10, 1 );