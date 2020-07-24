<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function subscribe(Request $request)
    {
         $email= $request->email;
         $insert = DB::table('subscribe')->insert(['email' => $email]);
         if($insert){
             return 0;
         }
       
        
    }

}
