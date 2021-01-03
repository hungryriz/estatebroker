<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = ['name', 'email', 'password' ,'phone', 'mobile_phone', 'address', 'city', 'state', 'country', 'id_card_number', 'image_path', 'scope_name'];
    protected $hidden = ['created_at', 'updated_at'];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
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

    public function scope()
    {
        return $this->belongsTo('App\Model\Scope');
    }
}
