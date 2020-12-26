<?php

namespace App\Http\Controllers\ApiControllers\Auth;
use HasApiTokens, Notifiable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\User;

class ApiAuthController extends Controller
{
    //
    public function logout(Request $request)
    {
        try {
            $token = $request->user()->token();
            $token->revoke();
            $response = [['message' => 'You have been logged out'], 200];
        } catch(\Exception $e) {
            $response = [['message' => $e->getMessage()], 422];
        }

        return response(...$response);
    }

    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]
        );

        if($validator->fails()) {
            return response(['errors'=> $validator->errors()->all()], 422);
        }

        $user = User::where('email', $request->email)->first();
        if($user) {
            if(Hash::check($password, $request->user()->password)) {
                $accessToken = $request->user()->createToken('Personal Access Tokens ID#' . $user->id)->accessToken;
                return response(
                    [
                        'accessToken' => $accessToken,
                        'email' => $user->email,
                    ]
                );
            } else {
                return response(
                    ['message' => 'password is not right'],
                    422
                );
            }
        } else {
            return response(
                ['message' => 'User does not exist'],
                422
            );            
        }

    }

    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|max:255',
                'email' => 'required|email|string|max:255'
            ]
        );

        if($validator->fails()) {
            return response(
                ['message' => $validator->errors()->all()],
                422
            );
        }

        $name = $request->name;
        $email = $request->email;
        $password = Hash::make($request->password);
        $rememberToken = Str::random(10);
        $user = User::create(
            [
                'name' => $name,
                'email' => $email,
                'password' => $password,
                'rememberToken' => $rememberToken
            ]
        );

        $accessToken = $user->createToken('Personal Access Tokens ID#' . $user->id)->accessToken;

        return response(
            [
                'accessToken' => $accessToken,
                'email' => $user->email,
            ],
            200
        );
    }
}


