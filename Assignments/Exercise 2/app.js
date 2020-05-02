new Vue({
	el: '#exercise',
	data: {
		value: '',
	},
	methods: {
		alertMe: function () {
			alert('ALERT');
		},
		recordValue: function (event) {
			this.value = event.target.value;
		},
	},
});
