namespace $.$$ {

	const { px, rem, per } = $mol_style_unit
	const { hsla } = $mol_style_func
	
	$mol_style_define( $hyoo_artist_app, {
		
		Body: {
			padding: [ 0, $mol_gap.block ],
		},
		
		Images: {
			gap: $mol_gap.block,
			
			After: {
				margin: 'auto',
				width: px(768),
				maxWidth: per(100),
				height: 'auto',
				aspectRatio: 1,
			},
			
		},

		Image: {
			margin: 'auto',
			width: px(768),
			aspectRatio: 1,
			box: {
				shadow: [
					{
						x: 0,
						y: 0,
						blur: px(1),
						spread: 0,
						color: hsla( 0, 0, 100, .5 ),
					},
					{
						x: 0,
						y: 0,
						blur: rem(.5),
						spread: 0,
						color: hsla( 0, 0, 0, .25 ),
					},
				],
			},
		},

	} )
	
}
