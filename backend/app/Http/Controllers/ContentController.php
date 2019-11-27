<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Content;
use App\ Category;
use App\title;
use Image;
use App\User;
use App\comment_tbs;
use App\Galleries;
use App\Videos;
class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getcontent($id)
    {
        return response()->json(
           
            [
        'name'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
        ->join('activities','categories.activity_id','=','activities.id')
        ->join('users','titles.user_id','=','users.id')
        ->select('titles.*','categories.catname','categories.destription','categories.activity_id','activities.actname','users.firstname','users.lastname','users.middlename', 'users.familybackground', 'users.image')
       ->where('titles.id','=',$id)->get(),
       'gallery'=>Galleries::orderBy('id')->join('titles','galleries.title_id','=','titles.id')
       ->join('users','titles.user_id','=','users.id')
        ->select('galleries.*','titles.name_title','titles.location','titles.t_image','users.firstname','users.lastname','users.middlename','users.image','users.email')
       ->where('galleries.title_id','=',$id)
       ->get(),
       'comment'=>comment_tbs::orderBy('id')->join('titles','comment_tbs.title_id','=','titles.id')
       ->join('users','comment_tbs.user_id','=','users.id')
        ->select('comment_tbs.*','titles.name_title','titles.location','titles.t_image','users.firstname','users.lastname','users.middlename','users.image','users.email')
       ->where('comment_tbs.title_id','=',$id)
       ->get(),
       'content'=>Content::orderBy('id')->join('titles','contents.name_id','=','titles.id')
        ->select('contents.*','titles.name_title','titles.location','titles.t_image','titles.views')
       ->where('contents.name_id','=',$id)
       
       ->get()
       ]
    );
    }
    public function getcontentonly($id)
    {
        return response()->json(
            // Activities::where('id','=',1)->get(),
            [
        
       'content'=>content::orderBy('id')->join('titles','contents.name_id','=','titles.id')
        ->select('contents.*','titles.name_title','titles.location','titles.t_image')
       ->where('contents.id','=',$id)
       
       ->get()
       ]
    );
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

    
    public function getactid($id)
    {
        // return $id;
        return response()->json(
        
            Category::where('activity_id','=',$id)->get()
           
        );
    }
    public function store(Request $request)
    {
        
        $authid=auth()->user()->id;
        $image_name= $request->image;
          $request->merge(['user_id'=>$authid]);
        $detcontents = $request->contents;
        $videodet = $request->videos;
       
         $files=$image_name[0];
         $filenames=time().'.' . explode('/', explode(':', substr($files, 0, strpos($files,';')))[1])[1];
        Image::make($files)->resize(300, 300)->save(public_path('/upload/uploads/'.$filenames));
       
        $request->merge(['t_image'=>$filenames]);
        // return $request;
        // $content= title::create($request-> all());
    // return $content->id;
$imageName=[];
$count = 0;
foreach ($image_name as $img) {
        $file=$img;
       $filename=$count.'.'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
    
        Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
    $imageName[] =[
     'title_id' => 8,
   'image_name'=> $filename,
    ] ; 
    $count++;
}
//    Galleries::insert($imageName);

   $videoName=[];
$count = 0;
if($videodet){ 
foreach ( $videodet as $vid) {
            $file=$vid;
        //  return $file;
         $filename= $count.''.time().'.'.$file->getClientOriginalName();
         return $filename;
         //  $filename=$count.'.'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
    $path=$file->move(public_path('/upload/videos/'.$filename));
       
    $videoName[] =[
     'title_id' => 8,
   'video_name'=> $filename,
    ] ; 
    $count++;
}
}
//    Videos::insert($videoName);
return $videoName;
       $contentData=[];
       $counts = 0;
        // $request->merge(['name_id'=>$content->id]);
        foreach ($detcontents as $item) {
            $file=$item['c_image'];
            if($file){
            
            $filename=$counts.''.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
         
             Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
            }
             $contentData[] =[
             'header'=>$item['header'],
             'content' =>$item['content'],
             'quote'=>$item['quote'],
             'name_id' => 8,
             'c_image' =>$filename
             ] ; 
             $counts++;
         }
      
        //   Content::insert($contentData);
          return $contentData;
    }

 
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request)
    {
        $id=$request->id;
      $fdata=$request->fdata;
      $name_title=$request->fdata['name_title'];
    $detcontents= $fdata['gcontents'];
    $image_name=$request->galleryimage;
    //   return $request;
    if ($request->t_image){
        $file=$request->t_image;
        $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
     
        Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
       
        $request->merge(['t_image'=>$filename]);
        $updatet=DB::table('titles')
        ->where('id', $id)
        ->update(['status' =>'E','t_image'=>$request->t_image]);
    }
    $imageName=[];
$count = 0;
foreach ($image_name as $img) {
        $file=$img;
       $filename=$count.'.'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
    
        Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
    $imageName[] =[
     'title_id' => $id,
   'image_name'=> $filename,
    ] ; 
    $count++;
}
  $gally= Galleries::insert($imageName);
    $updatetitle=DB::table('titles')
    ->where('id', $id)
    ->update(['status' =>'E','name_title'=>$name_title]); 
    foreach ($detcontents as $item) {
        $update = DB::table('contents')
                    ->where([
                        ['id','=',$item['id']]
                    ])
                    ->update(array('header' => $item['header'], 'content' => $item['content']));
    
    }
    
    if($update | $updatetitle | $gally){
        return $id;
    }else{
        return '
            "success":"Anything change"
        ';
    }
    }
    public function updatelive(Request $request)
    {
    $id=$request->id;
     
    // return $id;
   
    $updatetitle=DB::table('titles')
    ->where('id', $id)
    ->update(['status' =>'Y']); 
  
     return $updatetitle;
    // if($update){
    //     return '
    //         "success":"true"
    //     ';
    // }
    }

    public function updateView(Request $request)
    {
        $id=$request;
        return $id;
    // return response()->json(
        
       

    //     $view = DB::where('id', $id)
    //             -get();
            // $data = $request -> count;
            
        // $hh= $view -> views + 1;
   
    // $updatView=DB::table('titles')
    // ->where('id', $id)
    // ->update(['views' =>'Y']); 
  
    //  return $updatetitle;
    // if($update){
    //     return '
    //         "success":"true"
    //     ';
    // }
    // );
    }
    public function trash(Request $request)
    {
        $id=$request[0];
     
    //  return $id;
   
    $trash=DB::table('titles')
    ->where('id', $id)
    ->update(['status' =>'T']); 
  
     return $trash;
    
    }
    public function destroytitle(Request $request)
    {
        $id=$request[0];
    
        $deletet=DB::table('titles')->where('id', $id)->delete();
        $deletec=DB::table('contents')->where('name_id', $id)->delete();
   
    return $id;
    }
    public function destroy($id)
    {
        //
    }
}
