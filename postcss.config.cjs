const  PluginAutoPrefixer  =  require('autoprefixer');
const  PluginTailwindCSS  =  require('tailwindcss');




module.exports  =  {

        plugins: [ PluginTailwindCSS(), PluginAutoPrefixer() ]

};