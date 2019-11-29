<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Likes;
use App\Follows;
class LikesController extends Controller
{
    //

    public function follow(Request $request)
    {
        //user_id title_id followed_user_id
        $authid=auth()->user()->id; 
        $request->merge(['user_id'=>$authid]);
        if($request->followed_user_id==$authid) {
            return 'can not follow';
        } else{
            $countfollow= DB::table("follows")->where('followed_user_id','=',$request->followed_user_id)->where('user_id','=',$authid)
            ->count();
            if($countfollow==0){
                $folow=follows::create($request-> all());
                return $folow;
            }else{
                return 'follow before';
            }
        }
        
        //  return $request->followed_user_id;
        
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
