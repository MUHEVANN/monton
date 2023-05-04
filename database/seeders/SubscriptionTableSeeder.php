<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class SubscriptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscription = [
            [
                "name" => "Basic",
                "price" => 200000,
                "active_period_in_months" => 3,
                "features"=>json_encode(["Features 1","Features 2"])
            ],
            [
                "name" => "Premium",
                "price" => 800000,
                "active_period_in_months" => 6,
                "features"=>json_encode(["Features 1","Features 2","Features 3","Features 4"])
            ],
        ];
        SubscriptionPlan::insert($subscription);
    }
}