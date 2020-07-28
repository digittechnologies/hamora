<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact_us extends Model
{
    public $table = 'contact_us';

    public $fillable = [
        'name',
        'email',
        'subject',
        'message',
    ];
}
