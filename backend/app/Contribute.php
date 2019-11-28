<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contribute extends Model
{
    protected $fillable = [
        'header', 'content','title_id','quote','user_id','content_id','c_image'
    ];
}
