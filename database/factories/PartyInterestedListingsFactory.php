<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\PartyInterestedListing;
use Faker\Generator as Faker;

$factory->define(PartyInterestedListing::class, function (Faker $faker) {
    return [
        //
        'status' => 'status',
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
