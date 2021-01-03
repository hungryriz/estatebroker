<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Scope extends Model
{
    public $timestamps = false;
    
    public function users()
    {
        return $this->hasMany('App\Model\User');
    }
}
