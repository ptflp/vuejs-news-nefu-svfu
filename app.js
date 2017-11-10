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
					page: page,
					per_page: this.perPage
				}
			}		
			this.$http.get('https://s-vfu.ru/news/data.php',options).then(function(response) {				
				this.items= JSON.parse(response.body);
				console.log(this.items);

			},console.log)		
		}
	},
	created: function () {
		this.fetchPhotos(this.currentPage)
	}
})