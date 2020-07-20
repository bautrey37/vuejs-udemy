new Vue({
	el: '#app5',
	data: {
		color: 'gray',
		width: 100,
	},
	computed: {
		myStyle: function () {
			return {
				backgroundColor: this.color,
				width: this.width + 'px',
			};
		},
	},
});
