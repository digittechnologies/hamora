<?php

namespace App\Http\Controllers;

use App\title;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Content;
use App\ Category;
use Image;
use App\User;
use App\comment_tbs;
use App\Galleries;
class UserController extends Controller
{

    public function getUsers()
    {
        return DB::table("users")->where('role_id','=','1')
        ->get();
    }
    public function getAdmins()
    {
        return DB::table("users")->where('role_id','=','2')
        ->get();
    }

    public function getComments()
    {
        return DB::table("comment_tb")->get();
    }
    public function getRates()
    {
        return DB::table("rate_tb")->get();
    }
    public function getArticle()
    {
        return response()->json(
            // Activities::where('id','=',1)->get(),
            [
        'name'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
        ->join('activities','categories.activity_id','=','activities.id')
        ->join('users','titles.user_id','=','users.id')
           ->join ('contents','titles.id','=','contents.name_id')
        ->select('titles.*','categories.catname','contents.header','contents.content','categories.destription','categories.activity_id','activities.actname','users.firstname','users.lastname','users.middlename', 'users.familybackground', 'users.image')
      ->get(),
        'gallery'=>Galleries::orderBy('id')->join('titles','Galleries.title_id','=','titles.id')
       ->join('users','titles.user_id','=','users.id')
        ->select('Galleries.*','titles.name_title','titles.location','titles.t_image','users.firstname','users.lastname','users.middlename','users.image','users.email')
    //    ->where('title_id','=',$id)
       ->get(),
      
       ]
    );

//         $article = DB::table('titles')
//         ->select('titles.*','contents.header','contents.content','contents.c_image', 'contents.list',
//         'categories.id','categories.catname', 'activities.actname','users.image', 'users.firstname', 'users.lastname')
//         ->join ('contents','titles.id','=','contents.name_id')
//         ->join ('categories','categories.id','=','titles.category_id')
//         ->join ('activities','activities.id','=','categories.activity_id')
//         ->join ('users','titles.user_id','=','users.id')       
//         ->get();

    }
    public function getRatesforTitle()
    {
     $rate =DB::table('rate_tb')->select(DB::raw('AVG(rate) AS rate'), 'title_id' )->groupBy('title_id')->get();
     return $rate;
    }
    public function getcommentforTitle()
    {
     $comment =DB::table('comment_tb')->select(DB::raw('count(comment) AS number_of_comment'), 'comment','title_id')->groupBy('title_id','comment')->get();
     return $comment;
    }
    public function updatepost(Request $request)
    {
        $post = DB::table('contents')->where('contents.title_id','=',$request->name_id)
        ->update(array(
            'header'=> $request->header,
            'content' => $request->content
        )
        );
        if($post){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function addview(Request $request){
    // return $request->id;
        $view = DB::table('titles')->select('views')->where('id','=',$request->id)->get();
        $addview = DB::table('titles')->where('id','=',$request->id)
        ->update(array(
            'views'=> $view[0]->views+1
        )
        );
        if($addview){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    public function getAllPost()
    {
        $post = DB::select('select count(id) as "all_post", (select COUNT(id) from titles where status = "N") as "pending", 
        (select COUNT(id) from titles where status = "Y") as "approved",(select COUNT(id) from titles where status = "E") as "editted" from titles');
      return $post;

    }
    public function name(){
        $name = DB::select('SELECT titles.id, name_title, location, t_image, about, views, status, count(comment) as "comment" from titles
         left outer join comment_tbs on (titles.id = comment_tbs.title_id) left outer join categories on(categories.id = titles.category_id) 
         WHERE activity_id = 1 group by titles.id, name_title, location, t_image, about, views, status');
        //  $name2 =DB::table('titles')->select("titles.id", "name_title"," location", "t_image", "about"," views"," status"),DB::raw('count(comment) as comment'
        //  )
    }

    public function userupdate(Request $request)
    {
        $id=$request->id;
     
        // return $id;
       
        $update=DB::table('users')
        ->where('id', $id)
        ->update(['firstname' =>$request->firstname,'middlename' => $request->middlename,'lastname'=>$request->lastname,'phone'=>$request->phone,'family'=>$request->family,'role_id'=>$request->role_id,'address'=>$request->address]); 
      
        return $update;
        // if($update){
        //     return '
        //         "success":"true"
        //     ';
        // }
    }
    public function usertrash(Request $request)
    {
        $id=$request[0];
     
        //  return $id;
       
        $trash=DB::table('users')
    ->where('id', $id)
    ->update(['status' =>'T']); 
    return $trash;
        // if($trash){
        //     return '
        //         "success":"true"
        //     ';
        // }
    }
    public function movetrashuser(Request $request)
    {
    $id=$request[0];
     
    //  return $id;
   
    $updatetitle=DB::table('users')
    ->where('id', $id)
    ->update(['status' =>'Y']); 
  
     return $updatetitle;
    // if($update){
    //     return '
    //         "success":"true"
    //     ';
    // }
    }
    public function deleteuser(Request $request){
        $id=$request[0];
        // return $id;
        $deletecat=DB::table('users')->where('id', $id)->update(['status' =>'D']); 
        // ->delete();
        return $deletecat;
    }

}
