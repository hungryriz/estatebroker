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

// Route::get('/', 'WebControllers\HomeController@index');


// Route::get('/home', function () {
//     return redirect('/dashboard');
// });


//  Route::get('login', 'Auth\LoginController@index')->name('login');


//Route::get('api/activity', 'ApiControllers\ActivityController@index')->name('api/activity');

Auth::routes();
// Route::any( '/', function() {
//     return view('home');
// });
// Route::view('*', 'home');
Route::get("{path?}", "WebControllers\HomeController@index")->where('path', '.+');
// Route::any( '(.*)', function( $page ){
//     return view('home');
// });
// Route::get('/', 'WebControllers\HomeController@index')->name('home');
