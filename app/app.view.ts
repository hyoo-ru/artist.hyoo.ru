namespace $.$$ {
	export class $hyoo_artist_app extends $.$hyoo_artist_app {
		
		@ $mol_mem
		title() {
			if( !this.query() ) return super.title()
			return `${ this.query() } / ${ super.title() }`
		}
		
		@ $mol_mem
		query( next?: string ) {
			return this.$.$mol_state_arg.value( '', next ) ?? ''
		}
		
		@ $mol_mem
		query_en() {
			return this.$.$hyoo_lingua_translate( 'en', this.query() )
		}
		
		@ $mol_mem
		query_changed( next = this.query() ) {
			return next
		}
		
		@ $mol_mem
		index( next?: number ) {
			return Number( this.$.$mol_state_arg.value( 'at', next?.valueOf && String( next ) ) ?? 0 )
		}
		
		@ $mol_action
		imagine() {
			this.$.$mol_state_arg.go({ '': this.query_changed() })
		}
		
		@ $mol_mem
		prompt() {
			if( !this.index() ) return this.query_en()
			return `${ this.query_en() }, ${ this.index() }`
		}
		
		@ $mol_mem
		image() {
			if( !this.query() ) return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>'
			return this.$.$hyoo_artist_imagine( this.prompt() )
		}
		
	}
}
