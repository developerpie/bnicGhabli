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
        Schema::create('dao_user', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('dao_id');
            $table->string('role');
            $table->string('email');
            $table->string('from')->nullable();
            $table->decimal('share', 5, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dao_user');
    }
};
