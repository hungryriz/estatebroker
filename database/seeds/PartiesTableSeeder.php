<?php

use Illuminate\Database\Seeder;

class PartiesTableSeeder extends Seeder
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

        $parties->each(
        	function ($party) {
				$party->partyRepresentatives()
					->save(factory(App\Model\PartyRepresentative::class)->make());
			}
		);
    }
}
