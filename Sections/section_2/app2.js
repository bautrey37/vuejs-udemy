new Vue({
	el: '#app2',
	data: {
		name: 'kamina',
		counter: 0,
		secondCounter: 0,
	},
	computed: {
		output: function () {
			console.log('computed');
			return this.counter > 5 ? 'greater  5' : 'smaller 5';
		},
	},
	watch: {
		counter: function (value) {
			var vm = this;
			setTimeout(function () {
				vm.counter = 0;
			}, 2000);
		},
	},
	methods: {
		result() {
			console.log('method');
			return this.counter > 5 ? 'greater  5' : 'smaller 5';
		},
	},
});
