new Vue({
	el: '#exercise',
	data: {
		effectClasses: {
			highlight: false,
			shrink: true,
		},
		float: 'float',
		customClass: '',
		isVisible: true,
		myStyle: {
			width: '100px',
			height: '150px',
			backgroundColor: 'gray',
		},
		progressBar: {
			height: '20px',
			backgroundColor: 'blue',
			width: '0px',
		},
	},
	methods: {
		startEffect: function () {
			var vm = this;
			setInterval(function () {
				vm.effectClasses.highlight = !vm.effectClasses.highlight;
				vm.effectClasses.shrink = !vm.effectClasses.shrink;
			}, 1000);
		},
		progressBarExpand: function () {
			var vm = this;
			var widthCur = 0;
			var maxWidth = 200;
			setInterval(function () {
				vm.progressBar.width = widthCur < maxWidth ? widthCur + 'px' : maxWidth + 'px';
				widthCur += 20;
			}, 500);
		},
	},
});
