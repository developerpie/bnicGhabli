<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('escrows', function (Blueprint $table) {
            $table->id();
            $table->string('dao_id')->required();
            $table->string('title')->required();
            $table->float('balance')->required();
            $table->string('describe')->required();
            $table->bigInteger('contract_wallet_id')->required();
            $table->integer('split')->default(1);
            $table->integer('status')->default(0);
            $table->string('creator_email')->required();
            $table->string('reciver_email')->required();
            $table->text('depositHash')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('escrows');
    }
};
