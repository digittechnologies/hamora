<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class contactus extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $subject, $email, $messageDetails)
    {
        $this->name = $name;
        $this->subject = $subject;
        $this->email = $email;
        $this->messageDetails = $messageDetails;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('contactus')->with([
            'name' => $this->name,
            'subject' => $this->subject,
            'email' => $this->email,
            'messageDetails' => $this->messageDetails
            ]);
    }
}
