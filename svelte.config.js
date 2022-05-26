import SvelteAdapter from '@sveltejs/adapter-auto';
import SveltePreprocess from 'svelte-preprocess';




/**
 *
 *
 *    @type {import('@sveltejs/kit').Config}
 *
 *
 */
const CustomConfiguration = {


		//  https://github.com/sveltejs/svelte-preprocess
		preprocess : SveltePreprocess({

                postcss : true

        }),

		kit : {

				adapter: SvelteAdapter()

		}

};




export default CustomConfiguration;
