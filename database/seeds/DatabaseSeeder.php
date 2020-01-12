<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(
        	[
                AgentsTableSeeder::class,
                PartiesTableSeeder::class,
                ListingsTableSeeder::class,
                InterestsTableSeeder::class,
                // AgentRepresentativesTableSeeder::class,
                // PartyRepresentativesTableSeeder::class,
                ActivitiesTableSeeder::class,
                PartyInterestedListingsTableSeeder::class,
                // ActivityFilesTableSeeder::class,
                // ListingsTableSeeder::class,
                // PartyInterestedListingsTableSeeder::class,
                // DealsTableSeeder::class,
                // DealDetailsTableSeeder::class,
                // DealFilesTableSeeder::class,
        	]
        );
    }
}
