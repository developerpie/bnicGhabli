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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('full_name');
            $table->string('email')->unique();
            $table->string('wallet')->unique();
            $table->string('code');
            $table->string('gender');
            $table->string('country_code');
            $table->string('state_code');
            $table->string('birthday_year');
            $table->string('birthday_month');
            $table->string('birthday_day');
            $table->string('token')->nullable();
            $table->string('avatar')->nullable();
            $table->json('education');
            $table->json('profession');
            $table->json('skill');
            $table->json('language');
            $table->text('cv');
            $table->string('inviter_id')->nullable();
            $table->integer('inviter_paid')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
