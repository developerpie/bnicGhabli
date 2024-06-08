<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;



class NFTController extends Controller
{

    public function storeData(Request $request)
    {
        $data = $request->except('newToken');
        $newToken = $request->input('newToken');
        $filename = $newToken . ".json";
        Storage::disk('public')->put($filename, json_encode($data));

        return response()->json([
            'url' => url(Storage::url($filename))
        ]);
    }



}
