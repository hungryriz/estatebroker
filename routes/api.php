<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return response()
//         ->json([$request->user()]);
// });

// Route::middleware('auth:api')->get('activity', function (Request $request) {
//     return $request->user();
// });

// Route::get('/api/activity', 'ActivityController@index');
// Route::get('activity', 'ApiControllers/ActivityController@index');


Route::middleware('auth:api')->get('/activity', 'ApiControllers\ActivityController@index');
Route::post('/auth/login', 'ApiControllers\Auth\ApiAuthController@login')->name('api.login');
Route::post('/auth/register', 'ApiControllers\Auth\ApiAuthController@register')->name('api.register');
Route::middleware('auth:api')->post('/auth/logout', 'ApiControllers\Auth\ApiAuthController@logout')->name('api.logout');

Route::middleware('auth:api')->group(function(){
    Route::apiResource('listings', 'ApiControllers\ListingController');
    Route::apiResource('parties', 'ApiControllers\PartyController');
});
