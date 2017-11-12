var v= new Vue({
	el: '#app',
	data: {
    	showModal: false,
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
					perPage: this.perPage,
          			clear_cache: 'Y'
				}
			}		
			this.$http.get('http://www.s-vfu.ru/news/json/',options).then(function(response) {
				console.log(response);
				var f= JSON.parse(response.body);
				console.log(f);
				this.items= f.ITEMS;
				this.currentpage = page;
       		 	console.log(this.currentPage);
				this.totalItems = parseInt(f.NAV_RESULT.nSelectedCount);
				console.log(this.items);

			},console.log)	
		}
	},
	created: function () { //Инициализация при загрузке!
		this.fetchPhotos(this.currentPage)
	}
})