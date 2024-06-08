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
        Schema::create('daos', function (Blueprint $table) {
            $table->id();
            $table->boolean('consortium')->nullable();
            $table->string('name', 30);
            $table->string('token')->nullable();
            $table->string('symbol', 15);
            $table->longText('describe', 1000);
            $table->json('features'); 
            $table->string('wallpaper')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daos');
    }
};
