<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DealFile extends Model
{
    //
    public function deal()
    {
        return $this->belongsTo('App\Model\Deal');
    }
}
