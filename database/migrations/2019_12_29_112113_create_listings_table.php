<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('listings')) {
            Schema::create('listings', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('purpose');
                $table->string('property_type');
                $table->string('property_type_name');
                $table->text('location');
                $table->string('city');
                $table->string('property_title');
                $table->text('property_description')->nullable();
                $table->string('property_price');
                $table->string('land_area');
                $table->string('area_unit');
                $table->string('bedrooms');
                $table->string('bathrooms');
                $table->string('expires_after');
                $table->string('images')->nullable();
                $table->unsignedBigInteger('party_id')->nullable();
                $table->unsignedBigInteger('user_id');
                $table->timestamps();

                // primary key foreign key relations

                $table->foreign('party_id')->references('id')->on('parties')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */

}
