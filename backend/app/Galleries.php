<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galleries extends Model
{
    protected $fillable = [
        'image_name','title_id','status','user_id','contribute'
    ];
}
