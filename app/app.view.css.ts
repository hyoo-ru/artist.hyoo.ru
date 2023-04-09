namespace $.$$ {

	const { px } = $mol_style_unit
	
	$mol_style_define( $hyoo_artist_app, {
		
		Tools: {
			flex: {
				grow: 0,
			},
		},
		
		Body: {
			padding: 0,
		},
		
		Images: {
			gap: $mol_gap.block,
			
			After: {
				margin: 'auto',
				width: px(768),
				height: 'auto',
				aspectRatio: '1',
			},
			
		},

		Image: {
			margin: 'auto',
			width: px(768),
			aspectRatio: '1',
		},

	} )
	
}
