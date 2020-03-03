<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });



Route::get('/', function () {
    return view('admin');
});
Route::resource('activities', 'AdminControllers\ActivityController');
Route::resource('agents', 'AdminControllers\AgentController');
Route::resource('deals', 'AdminControllers\DealController');
Route::resource('interests', 'AdminControllers\InterestController');
Route::resource('listings', 'AdminControllers\ListingController');
Route::resource('parties', 'AdminControllers\PartyController');



//  Route::get('login', 'Auth\LoginController@index')->name('login');
Auth::routes();

//Route::get('api/activity', 'ApiControllers/ActivityController@index')->name('api/activity');
