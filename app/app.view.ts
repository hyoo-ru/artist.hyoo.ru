namespace $.$$ {
	export class $hyoo_artist_app extends $.$hyoo_artist_app {
		
		@ $mol_mem
		title() {
			if( !this.query() ) return this.title_default()
			return `${ this.query() } / ${ this.title_default() }`
		}
		
		@ $mol_mem
		query( next?: string ) {
			return this.$.$mol_state_arg.value( '', next ) ?? ''
		}
		
		@ $mol_mem
		query_en() {
			if( !this.query() ) return ''
			return this.$.$hyoo_lingua_translate( 'en', this.query() )
		}
		
		@ $mol_mem
		query_changed( next = this.query() ) {
			if( next === '' ) this.query('')
			return next
		}
		
		@ $mol_action
		imagine() {
			this.query( this.query_changed() )
		}
		
		@ $mol_mem_key
		image( uri: string ) {
			return uri
		}

		@ $mol_mem
		images( next?: number[] ) {
			this.query()
			return next ?? []
		}
		
		@ $mol_action
		images_more( from: string | null ) {
			if( !this.query_en() ) return []
			return [ this.$.$hyoo_artist_imagine( this.query_en() ) ]
		}
		
		@ $mol_mem
		suggests() {
			
			const query = this.query_changed()
			if( !query ) return []
			
			const [ prefix = query, suffix = '', postfix = '' ]
				= /^(.*)(\b(?:by|in|with)\b|,)([\w ]*?)$/.exec( query )?.slice(1) ?? []
			
			switch( suffix ) {
				
				case 'by': return this.artists()
					.filter( $mol_match_text( postfix, a => [a] ) )
					.map( artist => `${prefix}by ${artist} artist` )
				
				case 'in': return this.art_styles()
					.filter( $mol_match_text( postfix, s => [s] ) )
					.map( style => `${prefix}in ${style} style` )
				
				case 'with': return this.art_moods()
					.filter( $mol_match_text( postfix, m => [m] ) )
					.map( mood => `${prefix}with ${mood} mood` )
				
				case ',': return [
					`${prefix}, by `,
					`${prefix}, in `,
					`${prefix}, with `,
				]
				
				default: return []
				
			}
			
		}
		
	}
}
