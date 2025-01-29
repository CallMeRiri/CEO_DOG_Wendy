<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>DOG CEO</title>
		@yield ('style')
	</head>
	<body>
		@yield ('content')
		<script src="{{ URL::asset('scripts/jquery-3.5.1.min.js') }}" charset="utf-8"></script>
		<script src="{{ URL::asset('scripts/jquery-ui.js') }}" charset="utf-8"></script>
		@yield ('script')
	</body>
</html>