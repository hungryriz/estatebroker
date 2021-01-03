<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Party extends Model
{
    //
    public function partyRepresentatives()
    {
        return $this->hasMany('App\Model\PartyRepresentative');
    }

    public function listings()
    {
        return $this->belongsTo('App\Model\Listsing', 'party_interested_listings','party_id','listing_id')
        	->withTimestamps();;
    }

    public function agent()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function activities()
    {
        return $this->hasMany('App\Model\Activity');
    }

}


