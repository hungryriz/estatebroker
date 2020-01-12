<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
    //
    public function agentRepresentatives()
    {
        return $this->hasMany('App\Model\AgentRepresentative');
    }

    public function listings()
    {
        return $this->hasMany('App\Model\Listing');
    }

    public function parties()
    {
        return $this->hasMany('App\Model\Party');
    }

    public function activities()
    {
        return $this->hasMany('App\Model\Activity');
    }
}
