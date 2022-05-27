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

				adapter: SvelteAdapter(),

                files: {

                    template: 'src/application.html',
                    assets: 'src/static',
                    lib: 'src/lib',
                    routes: 'src/routes',

                },

		}

};




export default CustomConfiguration;
