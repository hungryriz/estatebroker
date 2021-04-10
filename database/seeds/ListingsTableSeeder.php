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
		$agents = App\Model\User::all();
		$purpose = [
			'sale',
			'buy',
			'rent',
			'wanted-for-rent'
		];
		$property_type = 'home';

	    $faker = Faker::create();
        foreach($parties as $party) {
    		foreach($agents as $agent) {
        		App\Model\Listing::create([
			        'purpose' => $faker->firstName,
			        'property_type' => $faker->phoneNumber,
					'property_type_detail' => $faker->phoneNumber,
					'property_title' => $faker->address,
			        'location' => $faker->address,
			        'city' => $faker->city,
					'description' => 'property description',
					'land_area' => rand(10,10000),
					'price' => rand(10000,10000000),
					'unit' => 'sq foot',
					'bedrooms' => rand(1,20),
					'bathrooms' => rand(1,20),
					'expries_after' => '20-05-2099',
					'images' => 'images',
			        'party_id' => $party->id,
			        'user_id' => $agent->id,
			        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
			        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        		]);
    		}
        }
    }
}