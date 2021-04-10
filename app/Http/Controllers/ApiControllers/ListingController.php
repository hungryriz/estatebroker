<?php

namespace App\Http\Controllers\ApiControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Listing;
use App\Model\PropertyFeatures;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Arr;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userId = $request->user() ? $request->user()->id : '';
        Log::info(Listing::where('user_id', $userId)->get());
        return Listing::where('user_id', $userId)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            $requestArr = $request->all();
            Log::info(print_r($requestArr, true));
            $requestArr = Arr::add($requestArr, 'user_id', $request->user()->id);
            $listing = Listing::create($requestArr);


            $images = $requestArr['images'] ?? [];

            Log::info(print_r($images, true));
            Log::info(public_path('images'));
            foreach($images as $image) {
                Log::info(print_r($image->name, true));
                $image->move(public_path('images'), $image->name);
            }

            return [
                'list_id' => $listing->id, 
                'message' => 'Listing created successfully, please add parties now :)'
            ];
        } catch(\Exception $e) {
            return ['message' => $e->getMessage()];
        }

        // PropertyFeatures::create($request->all());
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        // Log::info('update');
        try {
            Listing::find($id)->update($request->all());
            return ['message' => __('Successfully updated')];
        } catch(\Exception $e) {
            return ['message' => __($e->getMessage())];
        }
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
        Listing::destroy($id);
    }
}
