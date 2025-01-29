@extends ('layout/app')

@section ('style')
    <link rel="stylesheet" href="{{ URL::asset('style/style.css') }}">
@endsection

@section ('script')
    <script src="{{ URL::asset('scripts/script.js') }}" charset="utf-8"></script>
@endsection

@section ('content')

<body>
    <h1 class="header">DOG CEO</h1>
    <div class="app-wrapper">
        <label for="breed-select">Choose a breed:</label>
        <select id="breed-select" class="breed-select" aria-label="Dog Breed Selector" onchange="changeDog(event)"> 
            <option value="" disabled selected>Dog Breed</option>
        </select>
        <div id="image-container" aria-live="polite"></div>

    </div>
</body>

@endsection
