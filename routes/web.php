<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PromotionController;

Route::get('/', function () {
        return view('welcome');
   
});

Route::get('/cart', function () {
        return view('cart');
});

Route::get('/images/{filename}', function($filename){
    $path = resource_path().'/views/images/'.$filename;
    if(!File::exists($path)) {
        return abort(404);
    }
    $file = File::get($path);
    $type = File::mimeType($path);
    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);
    return $response;
});

Route::get('/promotions', [PromotionController::class, 'getPromotions']);

// Catch-all route for the Vue.js application
// Route::get('/{any}', function () {
//     return view('app'); // This is the Blade template we will create next
// })->where('any', '.*');