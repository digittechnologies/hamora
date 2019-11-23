<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required', 
            'lastname' => 'required', 
            'middlename'=>'required',
            'email' => 'required|email|unique:users', 
            'town' => 'required', 
            'address' => 'required', 
            'password' => 'required|confirmed',
            'family' => 'required',
            'familybackground' => 'required',
            'phone' => 'required'

        ];
    }
}
