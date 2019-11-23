<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class title extends Model
{
    protected $fillable = [
        'name_title', 'location','t_image','about','user_id','views','status','category_id'
    ];
}
