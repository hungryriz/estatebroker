<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class ActivitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

	    $listings = App\Model\Listing::all();
	    $parties = App\Model\Party::all();
	    $agents = App\Model\Agent::all();
	    $faker = Faker::create();
        foreach($parties as $party) {
    		foreach($agents as $agent) {
    			foreach($listings as $list) {
	        		App\Model\Activity::create([
	        			'listing_id' => $list->id,
	        			'party_id' => $party->id,
	        			'agent_id' => $agent->id,
	        			'activity_time' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
	        			'status' => 'POSTPONED',
	        			'notes' => 'notes',
	        			'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
	        			'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
	        		]);
	        	}
    		}
        }

	    $activities = App\Model\Activity::all();
        foreach($activities as $activity) {
    		App\Model\ActivityFile::create([
    			'activity_id' => $activity->id,
    			'path' => 'path/to/file',
    			'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    			'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    		]);
        }
    }
}






