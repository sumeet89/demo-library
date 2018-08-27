<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>Library</title>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="_csrf" content="${_csrf.token}" />

<link rel="stylesheet" type="text/css" href="/css/primeui.min.css" />
<link rel="stylesheet" type="text/css" href="/css/theme.css" />

<script type="text/javascript" src="js/primeui-all.min.js"></script>
<script type="text/javascript" src="js/library.listing.js"></script>
<script type="text/javascript" src="js/rest.caller.js"></script>
<script type="text/javascript" src="js/listing.urlbuilder.js"></script>

</head>

<body>
	<script type="text/javascript">
		//<![CDATA[
		$(document).ready(function() {
			LibraryListing.initGrowl();
			LibraryListing.listBooks();
		});
		//]]>
	</script>

	<h1>Library</h1>
	<hr>

	<div id="messages"></div>
	
	<div style="height: 30px; width: 100%;"></div>

	<div>
		<form id="bookForm">
			<div style="display:inline;">
				<label for="title">Title</label>
				<input type="text" name="title" id="title" />
			</div>
			
			<div style="display:inline;">
				<label for="author">Author</label>
				<input type="text" name="author" id="author" />
			</div>
			
			<div style="display:inline;">
				<label for="publishedYear">Year Published</label>
				<input type="text" name="publishedYear" id="publishedYear" />
			</div>
			
			<div style="display:inline;">
				<label for="price">Price</label>
				<input type="text" name="price" id="price" />
			</div>
			
			<div style="display:inline;">
				<button type="button" onclick="LibraryListing.saveBook();">Save</button>
			</div>
		</form>
		<div id="validationMessage" style="margin-top: 10px;">
			
		</div>
	</div>
	
	<div style="height: 30px; width: 100%;"></div>

	<div class="books">
		<div id="booksTable"></div>
	</div>

</body>
</html>
