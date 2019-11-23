<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\comment_tbs;
use App\User;
class CommentController extends Controller
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
        
         $request->merge(['user_id'=>$authid]);
         $id=$request->title_id;
        //  return $id;
        $comment=comment_tbs::create($request-> all());
        // return $comment;
        if($comment){
           $count= DB::table("comment_tbs")->where('title_id','=',$id)
            ->count();
            $updatecomment=DB::table('titles')
    ->where('id', $id)
    ->update(['comment_count' =>$count]); 
  
     return $count;
        }
//     $count= DB::table("comment_tbs")->where('title_id','=',$id)
//     ->count();
//     $updatecomment=DB::table('titles')
// ->where('id', $id)
// ->update(['comment_count' =>$count]); 

// return $count;
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
