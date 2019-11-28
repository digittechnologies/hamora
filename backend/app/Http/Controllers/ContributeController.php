<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;
use App\ Category;
use App\title;
use Image;
use App\User;
use App\comment_tbs;
use App\Galleries;
use App\Videos;
use App\Contribute;
class ContributeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $authid=auth()->user()->id;
        $image= $request->c_image;
        $data=$request->formdata;
        if($image){
            $files=$image;
            $filenames=time().'.' . explode('/', explode(':', substr($files, 0, strpos($files,';')))[1])[1];
           Image::make($files)->resize(300, 300)->save(public_path('/upload/uploads/'.$filenames));
          
           $request->merge(['c_image'=>$filenames]);
        }
          $request->merge(['user_id'=>$authid]);
          $request->merge(['header'=>$data['header']]);
          $request->merge(['content'=>$data['content']]);
          $request->merge(['quote'=>$data['quote']]);
          $request->merge(['title_id'=>$data['title_id']]);
          $request->merge(['content_id'=>$data['content_id']]);
        $contribute=Contribute::create($request-> all());
        return $contribute;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
