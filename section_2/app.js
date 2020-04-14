new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
    world: 'World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
	},
	methods: {
		sayHello: function() {
    	this.title = 'Hello!!'
			return 'Hello ' + this.world;
		}
	}
})
