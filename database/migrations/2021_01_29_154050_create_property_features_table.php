<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('property_features')) {
            Schema::create('property_features', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('listing_id')->nullable();
                $table->boolean('furnished');
                $table->boolean('swimming_pool');
                $table->boolean('lawn');
                $table->boolean('study_room');
                $table->boolean('dining_room');
                $table->boolean('prayer_room');
                $table->boolean('gym');
                $table->boolean('bedrooms');
                $table->boolean('laundry_room');
                $table->boolean('maintenance_staff');
                $table->boolean('security_staff');


                $table->timestamps();
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
        Schema::dropIfExists('property_features');
    }
}
