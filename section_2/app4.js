new Vue({
	el: '#app4',
	data: {
		attachRed: false,
		color: 'green',
	},
	computed: {
		divClasses: function () {
			return {
				red: this.attachRed,
				blue: !this.attachRed,
			};
		},
	},
});
