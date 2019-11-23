<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Category::where('status','Y')->get());
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
        $cate= Category::create($request-> all());
        return $cate;
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
    public function update(Request $request)
    {
        $id=$request->id;
     
        // return $id;
       
        $update=DB::table('categories')
        ->where('id', $id)
        ->update(['catname' =>$request->catname,'destription' => $request->destription]); 
      
        //  return $trash;
        if($update){
            return '
                "success":"true"
            ';
        }
    }
    public function catetrash(Request $request)
    {
        $id=$request[0];
     
        //  return $id;
       
        $trash=DB::table('categories')

    ->where('id', $id)
    ->update(['status' =>'T']); 
    return $trash;
      


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function movetrashc(Request $request)
    {
    $id=$request[0];
     
    //  return $id;
   
    $updatetitle=DB::table('categories')
    ->where('id', $id)
    ->update(['status' =>'Y']); 
  
     return $updatetitle;
    // if($update){
    //     return '
    //         "success":"true"
    //     ';
    // }
    }

   
    public function deletecat(Request $request)
    {
        $id=$request[0];
        // return $id;
        $deletecat=DB::table('categories')->where('id', $id)->delete();
        $deletet=DB::table('titles')->where('categories_id','=',$id)->delete();
       return $id;
    }
    public function destroy($id)
    {
        
    }
}
