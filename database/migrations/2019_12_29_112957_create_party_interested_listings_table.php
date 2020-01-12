<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartyInterestedListingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('party_interested_listings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('interest_id');
            $table->unsignedBigInteger('party_id');
            $table->unsignedBigInteger('agent_id');
            $table->unsignedBigInteger('listing_id');
            $table->string('status');
            $table->unique(['listing_id','party_id','agent_id','interest_id'], 'party_interested_listings_lid_pid_aid_iid_unique');

            $table->timestamps();

            $table->foreign('listing_id', 'party_interested_listings_lid_foreign')->references('id')->on('listings')->onDelete('cascade');
            $table->foreign('party_id','party_interested_listings_pid_foreign')->references('id')->on('parties')->onDelete('cascade');
            $table->foreign('agent_id', 'party_interested_listings_aid_foreign')->references('id')->on('agents')->onDelete('cascade');
            $table->foreign('interest_id', 'party_interested_listings_iid_foreign')->references('id')->on('interests')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('party_interested_listings');
    }
}
