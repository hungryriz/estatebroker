<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDealDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deal_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('notes');
            $table->unsignedBigInteger('deal_id');
            $table->unsignedBigInteger('party_id');
            $table->unsignedBigInteger('user_id');

            // primary key foreign key relations
            $table->foreign('deal_id')->references('id')->on('deals')->onDelete('cascade');
            $table->foreign('party_id')->references('id')->on('parties')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deal_details');
    }
}
