namespace $ {
	
	export function $hyoo_artist_imagine( this: $, prompt: string, forbid = '' ) {
		if( !prompt ) return ''
		return this.$mol_huggingface_run( 'hyoo-imagine', 0, prompt + ' ' + $mol_wire_sync( Math ).random() )[0]
	}
	
	// export function $hyoo_artist_imagine( this: $, prompt: string, forbid = '' ) {
		
	// if( !prompt ) return ''
	
	// /** @see https://huggingface.co/spaces/ArtGAN/Image-Diffusion-WebUI */
	// const space = 'artgan-image-diffusion-webui'

	// 	const path = this.$mol_huggingface_run(
	// 		space,
	// 		0,
	// 		'dreamlike-art/dreamlike-photoreal-2.0',
	// 		prompt,
	// 		forbid,
	// 		1, // Images
	// 		"DDIM",
	// 		7.5, // Guidance
	// 		40, // Steps
	// 		512, // Width
	// 		512, // Height
	// 		0,
	// 	)[0][0].name as string

	// 	return `https://${space}.hf.space/file=${path}`

	// }
	
	// export function $hyoo_artist_imagine(
	// 	this: $,
	// 	prompt: string,
	// 	forbid = '',
	// ) {
		
	// 	if( !prompt ) return ''
		
	// 	const space = 'ai-forever-kandinsky2-1'
		
	// 	const path = this.$mol_huggingface_run(
	// 		space,
	// 		2,
	// 		prompt,
	// 		forbid,
	// 	)[0][0].name as string

	// 	return `https://${space}.hf.space/file=${path}`

	// }
	
}
