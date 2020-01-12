<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Agent;
use Faker\Generator as Faker;

$factory->define(Agent::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'phone' => $faker->phoneNumber,
        'mobile_phone' => $faker->phoneNumber,
        'address' => $faker->address,
        'city' => $faker->city,
        'state' => $faker->state,
        'country' => $faker->country,
        'path' => str_random(10),
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s')
    ];
});