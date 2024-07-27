<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PromotionSeeder extends Seeder
{
    public function run()
    {
        DB::table('promotions')->insert([
            ['promoCode' => 'SAVE10', 'promoDesc' => '10% off any orders', 'percDisc' => 0.10],
            ['promoCode' => 'SAVE25', 'promoDesc' => '25% off any orders', 'percDisc' => 0.25],
            // Add more records as needed
        ]);
    }
}
