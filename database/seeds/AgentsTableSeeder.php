<?php

use Illuminate\Database\Seeder;

class AgentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Model\Agent::class, 10)->create()->each(
        	function ($agent) {
				$agent->agentRepresentatives()
					->save(factory(App\Model\AgentRepresentative::class)->make());

 				// $agent->listings()
					// ->save(factory(App\Model\Listing::class)->make());

 				$agent->parties()
					->save(factory(App\Model\Party::class)->make());

				// $agent->activities()
				// 	->save(factory(App\Model\Activity::class)->make());
			}
		);
    }
}