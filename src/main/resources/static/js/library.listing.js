
var LibraryListing = function() {
	return {
		
		validateFrom: function(){
			isValid = true;
			
			$('#validationMessage').empty();
		
			if($('#title').val() === ''){
				$('#validationMessage').append('<span style="display:block;color:red;">Title is invalid.</span>');
				isValid = false;
			}
			
			if($('#author').val() === ''){
				$('#validationMessage').append('<span style="display:block;color:red;">Author is invalid.</span>');
				isValid = false;
			}
			
			if(!$('#publishedYear').val().match('[0-9]{4}')){
				$('#validationMessage').append('<span style="display:block;color:red;">Year is invalid.</span>');
				isValid = false;
			}
			
			if(!$('#price').val().match('^[0-9]*\.?[0-9]*$')){
				$('#validationMessage').append('<span style="display:block;color:red;">Price is invalid.</span>');
				isValid = false;
			}
			
			return isValid;
		},
		
		saveBook: function(){
			
			if(!LibraryListing.validateFrom()){
				return;
			}
						
			var array = jQuery('#bookForm').serializeArray();
		    var book = {};
		    
		    jQuery.each(array, function() {
		    	book[this.name] = this.value || '';
		    });
		    
		    RestCaller.postJson('/saveBook', book, LibraryListing.growlSave(book));
		},
		
		listBooks: function (){
			
			total = RestCaller.makeSyncCall('/bookCount').responseText;
			
			$('#booksTable').puidatatable({
				lazy: true,
		        caption: 'Books',
		        editMode: 'cell',
		        
		        paginator: {
		            rows: 5,
		            totalRecords: total
		        },
		        
			    columns: [
			        {field: 'title', headerText: 'Title', editor: 'input', sortable: true, filter: true},
			        {field: 'author', headerText: 'Author', editor: 'input', sortable: true, filter: true},
			        {field: 'publishedYear', headerText: 'Year Published', editor: 'input', sortable: true},
			        {field: 'price', headerText: 'Price', editor: 'input', sortable: true},
			        {
			            content: function(rowData) {
			                return $("<button>Delete</button>").puibutton({
			                	click: function(event){
			                		RestCaller.post('/deleteBook?id=' + rowData.id, LibraryListing.growlDelete(event, rowData.id));
			                		$(this).closest('tr').remove(); // primeui doesn't seem to have something to refresh the table
			                	}
			                });
			            }
			        }
			    ],
			    
			    datasource: function(callback, ui){
			    	uri = ListingUrlBuilder.paginate('/books', ui.first === 0 ? 0 : ui.first/ui.rows , 5);
					
			    	if (ui.sortField) {
						uri = ListingUrlBuilder.sortBy(uri, ui.sortField, ui.sortOrder);
		            }
					
			    	if((ui.filters !== undefined) && (ui.filters !== null)){
			    		uri = ListingUrlBuilder.filter(uri, ui.filters);
			    	}
			    						
					RestCaller.makeAsyncCall(callback, this, encodeURI(uri));
			    },
			    
			    cellEdit: function(event, ui) {
			    	originalBook = ui.data;
			    	originalBook[ui.field] = ui.newValue;
			    	RestCaller.postJson('/saveBook', originalBook, LibraryListing.growlEdit(event, ui));
			    }
			});
		},
		
		growlEdit: function(event, ui){
			$('#messages').puigrowl('show', [{severity: 'info', summary: 'Edited', detail: 'Old Value: ' + ui.oldValue + ', New Value: ' + ui.newValue + ' for ' + ui.field}]);
		},
		
		growlSave: function(book){
			$('#messages').puigrowl('show', [{severity: 'info', summary: 'Saved', detail: 'Book with title ' + book.title}]);
		},
		
		growlDelete: function(event, id){
			$('#messages').puigrowl('show', [{severity: 'info', summary: 'Deleted', detail: 'Book with id ' + id}]);
		},
		
		initGrowl: function(){
			$('#messages').puigrowl();
		}
	};
}();
