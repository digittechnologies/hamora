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
        //  $GLOBALS['email']=$request->email;

        // $data = array('email'=>$request->email);
        // $sendMail = Mail::send('email', $data, function($message) {
        // $message->to($GLOBALS['email'], 'new user')->subject('New account created on Check HMS');
        // $message->from('no-reply@jtcheck.com','noreply');
        // });

        // if ($sendMail) {
        //     return 'sent';
        // }else{
        //     return 'failed';
        // }
        
    }

}
