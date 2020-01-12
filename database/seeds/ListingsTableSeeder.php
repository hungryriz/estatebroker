<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ListingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
	    $parties = App\Model\Party::all();
	    $agents = App\Model\Agent::all();
	    $faker = Faker::create();
        foreach($parties as $party) {
    		foreach($agents as $agent) {
        		App\Model\Listing::create([
			        'name' => $faker->firstName,
			        'phone' => $faker->phoneNumber,
			        'mobile_phone' => $faker->phoneNumber,
			        'address' => $faker->address,
			        'city' => $faker->city,
			        'state' => 'state',
			        'country' => $faker->country,
			        'party_id' => $party->id,
			        'agent_id' => $agent->id,
			        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
			        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        		]);
    		}
        }
    }
}
