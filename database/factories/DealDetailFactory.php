<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\DealDetail;
use Faker\Generator as Faker;

$factory->define(DealDetail::class, function (Faker $faker) {
    return [
        //
        'notes' => $faker->name,
    ];
});
