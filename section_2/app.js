new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		world: 'World!',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Google</a>',
		counter: 0,
		x: 0,
		y: 0,
	},
	methods: {
		sayHello: function () {
			this.title = 'Hello!!';
			return 'Hello ' + this.world;
		},
		increase: function (step, event) {
			this.counter += step;
		},
		updateCoordinates: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
    dummy: function(event) {
    	event.stopPropagation();
    },
    alertMe: function() {
    	alert('Alert');
    }
	},
});
