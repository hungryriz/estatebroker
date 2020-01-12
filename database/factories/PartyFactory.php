<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Party;
use Faker\Generator as Faker;

$factory->define(Party::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'phone' => '432423423',
        'address' => $faker->address,
        'city' => $faker->city,
        'state' => 'state',
        'country' => $faker->country,
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
