<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AgentRepresentative extends Model
{
    //
    public function agent() 
    {
    	return $this->belongsTo('App\Model\User');
    }
}
