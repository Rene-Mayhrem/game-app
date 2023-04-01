<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{mix('resources/css/app.css')}}">
    <title>Games Application</title>
</head>

<body>
    @viteReactRefresh
    @vite('resources/js/app.tsx')
    <!--<div id="app"></div>-->
    <div id="app"></div>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            @foreach ($games as $game)
            <div class="card" data-props="{{ json_encode($game) }}"></div>
            @endforeach
        </div>
    </div>

</body>

</html>