<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Deal;
use Faker\Generator as Faker;

$factory->define(Deal::class, function (Faker $faker) {
    return [
        //
        'deal_name' => $faker->name,
        'deal_time' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'notes' => 'notes notes',
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
