<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact_us;
use Mail;
use App\Mail\contactus;

class ContactUsController extends Controller
{
    public function contactus(Request $request)
    {
        $appEmail = env('MAIL_USERNAME', null);

        Contact_us::create($request->all());
        
        $name = $request->name;
        $subject = $request->subject;
        $email = $request->email;
        $messageDetails = $request->message;

        $sendMessageToMaail = Mail::to('support@hamorah.com')->send(new contactus(
            $name, 
            $subject,
            $email,
            $messageDetails
        ));
        if($sendMessageToMaail == NULL){
            return '
            "success":"true"
        ';
        } else {
            return '
            "success":"false"
        ';
        }
        // return $sendMessageToMaail; 
          ;
    }
}
