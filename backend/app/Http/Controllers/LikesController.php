<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Likes;
class LikesController extends Controller
{
    //

    public function index()
    {
        //
    }
    public function likes(Request $request)
    {
        $authid=auth()->user()->id;   
        $id=$request[0];
         $request->merge(['user_id'=>$authid]);
         $request->merge(['title_id'=>$id]);
         
        //   return $request;
        $countlike= DB::table("likes")->where('title_id','=',$id)->where('user_id','=',$authid)
            ->count();
            if($countlike==0){
                $like=likes::create($request-> all());
            }else{
                return 'like before';
            }
        // $comment=comment_tbs::create($request-> all());
        // return $comment;
        if($like){
           $count= DB::table("likes")->where('title_id','=',$id)
            ->count();
            $updatecomment=DB::table('titles')
    ->where('id', $id)
    ->update(['like' =>$count]); 
  
     return $count;
        } 
    }
}
