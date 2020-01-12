<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    //

    public function dealDetails()
    {
        return $this->hasMany('App\Model\DealDetails');
    }

    public function listing()
    {
        return $this->belongsTo('App\Model\Listing');
    }

    public function dealFiles()
    {
        return $this->hasMany('App\Model\DealFile');
    }
}
