<?php

use Illuminate\Database\Seeder;
use App\Model\DealDetail;

class DealsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $numberOfDoneDeals = 0;
        $deals = App\Model\Deal::all();
		foreach($deals as $deal) {
			if($numberOfDoneDeals > 2) {
				break;
			}
			DealDetail::create([
				'notes' => 'Notes',
				'deal_id' => $deal->id,
				'party_id' => 'Deal Name',
				'agent_id' => 'Deal Name',
		        'created_at' => Carbon\Carbon::now()->format(),
		        'updated_at' => Carbon\Carbon::now()->format(),
			]);
		}
    }
}
