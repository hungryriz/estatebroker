<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DealDetail extends Model
{
    //
    public function parties()
    {
        return $this->belongsTo('App\Model\Party');
    }

    public function agents()
    {
        return $this->belongsTo('App\Model\Agent');
    }

    public function deal()
    {
        return $this->belongsTo('App\Model\Deal');
    }
}
