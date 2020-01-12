<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Activity;
use Faker\Generator as Faker;

$factory->define(Activity::class, function (Faker $faker) {
    return [
        //
        'activity_time' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'status' => 'POSTPONED',
        'notes' => 'notes',
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
