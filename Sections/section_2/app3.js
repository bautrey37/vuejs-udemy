new Vue({
	el: '#app3',
	data: {
		link: 'http://google.com',
	},
	methods: {
		changeLink: function() {
            this.link = 'http://apple.com'
        }
	},
});
