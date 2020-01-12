<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ActivityFile extends Model
{
    //

    public function activity() 
    {
    	return $this->belongsTo('App\Model\Activity');
    }

}
