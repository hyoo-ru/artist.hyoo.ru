namespace $ {
	
	// export function $hyoo_artist_imagine( this: $, prompt: string ) {
	// 	return this.$mol_huggingface_run( 'hyoo-imagine', 0, prompt )[0]
	// }
	
	// export function $hyoo_artist_imagine( this: $, prompt: string, forbid?: string ) {
		
	// 	const space = 'artgan-stable-diffusion-controlnet-webu-185266f'

	// 	const path = this.$mol_huggingface_run(
	// 		space,
	// 		0,
	// 		'dreamlike-art/dreamlike-photoreal-2.0',
	// 		prompt,
	// 		forbid,
	// 		1, // Images
	// 		"DDIM",
	// 		7.5, // Guidance
	// 		70, // Steps
	// 		512, // Width
	// 		512, // Height
	// 		0,
	// 	)[0][0].name as string

	// 	return `https://${space}.hf.space/file=${path}`

	// }
	
	export function $hyoo_artist_imagine(
		this: $,
		prompt: string,
		forbid = '',
	) {
		
		if( !prompt ) return ''
		
		const space = 'ai-forever-kandinsky2-1'
		
		const path = this.$mol_huggingface_run(
			space,
			2,
			prompt,
			forbid,
		)[0][0].name as string

		return `https://${space}.hf.space/file=${path}`

	}
	
}
