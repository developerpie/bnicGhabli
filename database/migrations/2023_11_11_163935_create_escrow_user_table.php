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
        Schema::create('escrow_user', function (Blueprint $table) {
            $table->id();
            $table->integer('escrow_id');
            $table->integer('user_id');
            $table->string('email')->nullable();
            $table->string('role')->nullable();
            $table->integer('fundshare')->nullable();
            $table->integer('votepower')->nullable();
            $table->integer('signed')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('escrow_user');
    }
};
