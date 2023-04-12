namespace $.$$ {
	
	const Frame: $mol_style_properties = {
		margin: 'auto',
		width: '768px',
		maxWidth: '100%',
		height: 'auto',
		aspectRatio: 1,
	}
	
	$mol_style_define( $hyoo_artist_app, {
		
		Body: {
			padding: [ 0, $mol_gap.block ],
		},
		
		Images: {
			
			gap: $mol_gap.block,
			
			After: {
				... Frame,
			},
			
		},
		
		Image: {
			... Frame,
			box: {
				shadow: [
					{
						x: 0,
						y: 0,
						blur: '1px',
						spread: 0,
						color: $mol_style_func.hsla( 0, 0, 100, .5 ),
					},
					{
						x: 0,
						y: 0,
						blur: '.5rem',
						spread: 0,
						color: $mol_style_func.hsla( 0, 0, 0, .25 ),
					},
				],
			},
		},
		
	} )
	
}
