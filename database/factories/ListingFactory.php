<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Listing;
use Faker\Generator as Faker;

$factory->define(Listing::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'phone' => $faker->phoneNumber,
        'mobile_phone' => $faker->phoneNumber,
        'address' => $faker->address,
        'city' => $faker->city,
        'state' => 'state',
        'country' => $faker->country,
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});