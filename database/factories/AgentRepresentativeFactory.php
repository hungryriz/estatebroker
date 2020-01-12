<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\AgentRepresentative as AgentRepresentative;
use Faker\Generator as Faker;

$factory->define(AgentRepresentative::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'address' => $faker->address,
        'nic' => str_random(10),
        'photo' => str_random(10),
        'reference_name' => str_random(10),
        'reference_phone' => str_random(10),
        'reference_nic' => str_random(10),
        'reference_address' => str_random(10),
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
