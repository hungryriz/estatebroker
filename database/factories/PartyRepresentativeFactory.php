<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\PartyRepresentative;
use Faker\Generator as Faker;

$factory->define(PartyRepresentative::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'address' => $faker->address,
        'nic' => 'nic',
        'photo' => 'paht/to/photo',
		'reference_name' => $faker->name,
		'reference_phone' => 'paht/to/photo',
		'reference_nic' => 'reference_nic',
		'reference_address' => 'reference_address',
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
