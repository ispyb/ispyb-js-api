/*jshint strict:false */
"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
	  concat : {
		  prod:{
			  files : {
				  'min/ispyb-js-api.min.js' 		: ["js/dataadapter.js", "js/**/*.js",  "!js/test/*.js"]
			  }
		  }
	  },
	  uglify : {
		  prod:{
				
			  options: {
			      beautify : true,
			      stripBanners: true,
                              drop_debugger : false,
			      compress: {
					drop_debugger : false,
					global_defs: {
					  "DEBUG": true
					},
					dead_code: true
			      },
			  },
			  files : {
				  'min/ispyb-js-api.min.js' 		: ['min/ispyb-js-api.min.js']
			  }
		  }
	  },
	jshint: {
		 options: {
 		      reporter: require('jshint-stylish'),
		      jshintrc : '.jshintrc'
		 },
		 prod: [ 'js/**/*.js']
	},
	plato: {
		options: {
		},
		prod: {
		  files : {'report' : ['js/**/*.js']}
		}
    },
    includeSource: {
	    	options: {
		      basePath: 'js',
		      baseUrl: '../js/'
		},
		dev: {
		      files: [{
		    	  		'html/test.html': 'html/index.tpl.html'
		      }]
		}
	}


  });

  grunt.loadNpmTasks('grunt-include-source');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-plato');
  grunt.task.registerTask('default', ['jshint:prod' , 'plato:prod', 'concat:prod', 'uglify:prod']);
  grunt.task.registerTask('dev', ['jshint:prod' , 'plato:prod', 'concat:prod', 'includeSource:dev']);
  
};
