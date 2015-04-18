module.exports = function(grunt){

	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	
	/* Il va y avoir d'autre plugin d'automatisation, a mettre après développement en s'en appercevra, 
	   Afin d'ajouter un plugin allez sur le site http://gruntjs.com/plugins puis rechercher le plugin */
    
    require('load-grunt-tasks')(grunt);

	// Project configuration. 
	grunt.initConfig({

	/* Permet d'avertir quand un (;) n'a pas été ajouter à un fichier script .JS
	   Rappel Le ; oublier va causer des problème après la minification d'un fichier JS */
	 jshint: {
        all: ['main/src/cordova/www/app/*.js', '!main/src/cordova/www/app/min.js']
  	 },

  	 /* Option mangle : false permet de récupérer les variable utilisé par Angular obligatoirement, au lieu de générer des variable 
  	 	Angular et chiant de ce coté il a besoin de ses variables même après minification (d'autre solution sont aussi possible, celle ci a été retenue pour sa facilité) */
	  concat: {
	    dist: {
	      src: ['main/src/cordova/www/vendor/angular-1.3.15/angular.*.js', 'main/src/cordova/www/app/**.js'],
	      dest: 'js/min.js',
	    }
	  },

	  /* Permet d'ajouter automatiquement, les script des fichier js crée */
	  uglify: {
	  	options: {
	  		mangle: false
	  	},
	    my_target: {
	      files: {
	        'js/min.js': ['js/min.js']
	      }
	    }
	  },


	  /* Permet de minifier les fichier CSS */
	  cssmin: {
		  target: {
		    files: {
		      'main/src/cordova/www/public/css/min.css': ['main/src/cordova/www/public/css/**.css']
		    }
		  }
		},

		/* Permet de minifier les fichier js et de mettre un écouteur sur la console afin d'avoir les résultat en temps réél après modification d'un élément */

	  watch : {
	  	js : {
	  		files : ['main/src/cordova/www/app/*.js', '!main/src/cordova/www/app/min.js'],
	  		tasks : ['jshint', 'uglify'],
	  		options : {spawn : false, livereload: true}
	  	}

	  	css : {
	  		files : ['main/src/cordova/www/public/*.css', '!main/src/cordova/www/public/min.css'],
	  		tasks : ['cssmin'],
	  		options : {spawn : false}
	  	}
	  },


	  /* Permet de minifier les images (png, jpg, et gif) */
	  imagemin: {
	    dynamic: {                         // Another target 
	      files: [{
	        expand: true,                  // Enable dynamic expansion 
	        cwd: 'main/src/cordova/www/public/img/',                   // Src matches are relative to this path 
	        src: ['*.{png,jpg,gif}'],   // Actual patterns to match 
	        dest: 'min/'                  // Destination path prefix 
	      }]
	    }
	  }



	});

	/* Permet de mettre une ligne de commande et d'éxécuter les commande suivante, après ajout d'un plugin le mettre à la suite (mettre en ordre impérativement) */
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'imagemin']);

}