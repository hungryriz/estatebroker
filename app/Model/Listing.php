<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = [
        'id', 
        'purpose' , 
        'property_type' , 
        'property_type_name', 
        'location',
        'city', 
        'property_title', 
        'description',        
        'price',
        'land_area',
        'unit',
        'bedrooms',
        'bathrooms',
        'images',
        'expires_after',
        'user_id',
        'party_id'
    ];

    public function agent() 
    {
    	return $this->belongsTo('App\Model\User');
    }

    public function parties()
    {
        return $this->hasMany('App\Model\Party', 'party_interested_listings','listing_id','party_id')
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

    public function features()
    {
        return $this->hasOne('App\Model\PropertyFeatures');
    }

}
