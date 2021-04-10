<?php

use Illuminate\Database\Seeder;
use App\Model\PartyPurposeListing;

class PartyPurposeListingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $interests = config('settings.purpose');
        $parties = App\Model\Party::all();
        $agents = App\Model\User::all();
        $listings = App\Model\Listing::all();
        foreach($interests as $interest) {
	        foreach($parties as $party) {
	        	foreach($listings as $listing) {
	        		foreach($agents as $agent) {
		        		PartyPurposeListing::create([
		        			'purpose' => $interest,
		        			'party_id' => $party->id,
		        			'user_id' => $agent->id,
		        			'listing_id' => $listing->id,
					        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
					        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
		        		]);
	        		}
	        	}
	        }
        }
    }
}
