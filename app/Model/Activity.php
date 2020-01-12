<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    //
    public function party() 
    {
    	return $this->belongsTo('App\Model\Party');
    }

    public function listing() 
    {
    	return $this->belongsTo('App\Model\Listing');
    }

    public function agent() 
    {
    	return $this->belongsTo('App\Model\Agent');
    }

    public function activityFiles()
    {
        return $this->hasMany('App\Model\ActivityFile');
    }
}
