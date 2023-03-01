namespace $ {
	
	export function $hyoo_artist_imagine( this: $, prompt: string ) {
		return this.$mol_huggingface_run( 'hyoo-imagine', 0, prompt )[0]
	}
	
}
