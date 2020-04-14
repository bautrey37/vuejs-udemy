new Vue({
	el: '#exercise',
	data: {
		name: 'kamina',
    age: 28,
    imageLink: 'https://vignette.wikia.nocookie.net/gurennlagann/images/1/1f/Kaminarox.jpg/revision/latest?cb=20170924234704'
	},
	methods: {
		random: function() {
    	return Math.random()
    },
    random2: function() {
    	return Math.floor(Math.random() * 99 + 1)
    }
	}
})
