var RestCaller = function() {
	return {
		makeAsyncCall: function(callback, context, uri) {
			if (uri == null) {
				RestCaller.growlError('Error: <error> Path to the service is not provided </error>');
				return;
			}
			
			$.ajax({
				type: "GET",
				url: uri,
				dataType: "json",
				context: context,
				success: function(response) {
					callback.call(this, response);
				},
				error: function(jqXHR) {
					RestCaller.growlError('Error: <error>' + jqXHR.status + ',' + jqXHR.statusText + '</error>');
				}
			});
		},
		
		makeSyncCall: function(uri) {
			if (uri == null) {
				RestCaller.growlError('Error: <error> Path to the service is not provided </error>');
				return;
			}
			
			return $.ajax({
				type: "GET",
				url: uri,
				dataType: "json",
				async: false,
				error: function(jqXHR) {
					RestCaller.growlError('Error: <error>' + jqXHR.status + ',' + jqXHR.statusText + '</error>');
				}
			});
		},
		
		postJson: function(uri, data, onSuccess) {
			if (uri == null) {
				RestCaller.growlError('Error: <error> Path to the service is not provided </error>');
				return;
			}
			
			$.ajax({
	            url: uri,
	            method: "POST",
	            contentType: 'application/json',
	            data: JSON.stringify(data),
	            headers: 
	            {
	                'X-CSRF-TOKEN': $('meta[name="_csrf"]').attr('content')
	            },
	            datatype: "json",
	            success: function(response) {
	            	onSuccess.call();
				},
	            error: function(jqXHR) {
					RestCaller.growlError('Error: <error>' + jqXHR.status + ',' + jqXHR.statusText + '</error>');
				}
	        });
		},
		
		post: function(uri, onSuccess) {
			if (uri == null) {
				RestCaller.growlError('Error: <error> Path to the service is not provided </error>');
				return;
			}
			
			$.ajax({
	            url: uri,
	            method: "POST",
	            headers: 
	            {
	                'X-CSRF-TOKEN': $('meta[name="_csrf"]').attr('content')
	            },
	            success: function(response) {
	            	onSuccess.call();
				},
	            error: function(jqXHR) {
					RestCaller.growlError('Error: <error>' + jqXHR.status + ',' + jqXHR.statusText + '</error>');
				}
	        });
		},
		
		growlError: function(message){
			$('#messages').puigrowl('show', [{severity: 'error', summary: 'Service call failed', detail: message}]);
		}
	};
}();