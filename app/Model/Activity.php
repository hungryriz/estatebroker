<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    // Activity is a meeting on agents shop, on the property or any other activity related to business.
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
    	return $this->belongsTo('App\Model\User');
    }

    public function activityFiles()
    {
        return $this->hasMany('App\Model\ActivityFile');
    }
}
