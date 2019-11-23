<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comment_tbs extends Model
{
    protected $fillable = [
        'comment', 'user_id','title_id'
    ];
}