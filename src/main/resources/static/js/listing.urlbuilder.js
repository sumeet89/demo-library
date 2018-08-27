var ListingUrlBuilder = function() {
	return {
		
		sortBy: function(uri, sortField, sortOrder){
			return ListingUrlBuilder.addParameterSeparater(uri) + 'sort_by=' + sortField + '&sort_order=' + sortOrder;
		},
		
		paginate: function(uri, pageNumber, pageSize){
			return ListingUrlBuilder.addParameterSeparater(uri) + 'page_number=' + pageNumber + '&page_size=' + pageSize;
		},
		
		filter: function (uri, filterObjects){
			filters = [];
			
			filterObjects.forEach(function(element) {
				if(element.value !== ''){
					filters.push(element.field + '=' + element.value);
				}
			});
			
			return ListingUrlBuilder.addParameterSeparater(uri) + 'filter=[' + filters.join(',') + ']';
		},
		
		addParameterSeparater: function (uri){
			if(uri.includes('?')){
				return uri + '&';
			}
			return uri + '?';
		}
	};
}();