<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContributesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contributes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('header');
            $table->string('content');
            $table->string('c_image')->nullable();
            $table->string('quote')->nullable();
            $table->string('title_id');
            $table->string('content_id');
            $table->string('user_id');
            $table->string('status')->default('Y');

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
        Schema::dropIfExists('contributes');
    }
}
