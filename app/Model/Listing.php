<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    //
    public function agent() 
    {
    	return $this->belongsTo('App\Model\Agent');
    }

    public function parties()
    {
        return $this->belongsTo('App\Model\Party', 'party_interested_listings','listing_id','party_id')
        	->withTimestamps();;
    }

    public function activities()
    {
        return $this->hasMany('App\Model\Activity');
    }

    public function deal()
    {
        return $this->hasOne('App\Model\Deal');
    }

}
