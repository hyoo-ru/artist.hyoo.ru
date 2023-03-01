namespace $ {
	
	export function $hyoo_artist_imagine( this: $, prompt: string ) {
		return this.$mol_huggingface_run( 'jin-nin-artist', 3, prompt, 0 )[0]
	}
	
}
