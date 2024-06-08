<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dao extends Model
{
    public function members()
    {
        return $this->belongsToMany(User::class, 'dao_user')
            ->withPivot('full_name', 'role', 'share', 'from')
            ->withTimestamps();
    }

    
  
}
