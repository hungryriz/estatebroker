<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PartyRepresentative extends Model
{
    //
    public function party() 
    {
    	return $this->belongsTo('App\Model\Party');
    }
}


 