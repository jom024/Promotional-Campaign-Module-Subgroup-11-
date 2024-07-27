<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    public function getPromotions()
    {
        $promotions = Promotion::select('promoCode', 'percDisc')->get();
        return response()->json($promotions);
    }
}
