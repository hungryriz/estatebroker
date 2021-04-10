<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\PartyInterestedListing;
use Faker\Generator as Faker;

$factory->define(PartyPurposeListing::class, function (Faker $faker) {
    return [
        //
        'purpose' => array_rand(config('settings.purpose')),
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
