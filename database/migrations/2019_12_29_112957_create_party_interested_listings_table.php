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
        if(!Schema::hasTable('party_purpose_listings')) {
            Schema::create('party_purpose_listings', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('party_id');
                $table->unsignedBigInteger('user_id');
                $table->unsignedBigInteger('listing_id');
                $table->enum('purpose', config('settings.purpose'));
                $table->unique(['listing_id','party_id','user_id','purpose'], 'party_pupose_listings_lid_pid_aid_iid_unique');

                $table->timestamps();

                $table->foreign('listing_id', 'party_purpose_listings_lid_foreign')->references('id')->on('listings')->onDelete('cascade');
                $table->foreign('party_id','party_purpose_listings_pid_foreign')->references('id')->on('parties')->onDelete('cascade');
                $table->foreign('user_id', 'party_purpose_listings_aid_foreign')->references('id')->on('users')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('party_purpose_listings');
    }
}
