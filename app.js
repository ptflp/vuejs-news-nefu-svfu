new Vue({
	el: '#app',
	data: {
		items: [],
		totalItems: 0,
		perPage: 9,
		currentPage: 1
	},
	methods: {
		fetchPhotos: function(page) {
			var options = {
				params: {
					PAGEN_1: page,
					perPage: this.perPage
				}
			}		
			this.$http.get('https://www.s-vfu.ru/news/json/',options).then(function(response) {
				console.log(response);
				this.items= response.data.ITEMS;
				console.log(this.items);

			},console.log)		
		}
	},
	created: function () {
		this.fetchPhotos(this.currentPage)
	}
})