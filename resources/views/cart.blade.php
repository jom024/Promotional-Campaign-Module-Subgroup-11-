<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cart</title>
  <link href="{{ mix('css/cart.css') }}" rel="stylesheet">
</head>
<body>
  <div id="cart">
    <cart-page></cart-page>
  </div>
  <script src="{{ mix('js/cart.js') }}"></script>
</body>
</html>
