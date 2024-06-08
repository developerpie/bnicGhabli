<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Faker\Factory as Faker;

class UserController extends Controller
{
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'success', 'check' => auth()->check()], 200);
    }

    public function login(Request $request)
    {
        $inviter = null;
        $referral = $request->input('ref');
        if ($referral) {
            $InviterEmail = base64_decode($referral);
            $inviter = User::where('email', $InviterEmail)->first();
        }
        return Inertia::render('User/UserLogin/UserLogin', ['user' => auth()->user(), 'inviter' => $inviter]);
    }


    public function update(Request $request)
    {
        $user = User::find($request->user_id);
        if (!$user) return response()->json(['message' => 'User not found'], 404);
        $user->update($request->except('user_id'));
        return response()->json(['message' => 'User updated successfully', 'data' => $request->except('user_id'), 'user' => $user], 200);
    }

    public function signin(Request $request)
    {
        if ($user = User::where('wallet', $request->wallet)->first()) auth()->login($user);
        return response()->json(['check' => auth()->check()], 200);
    }

    public function create()
    {
        return Inertia::render('User/UserCreate/UserCreate');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|unique:users',
            'wallet' => 'required|unique:users',
            'country_code' => 'required',
            'state_code' => 'required',
            'birthday_year' => 'required',
            'birthday_month' => 'required',
            'birthday_day' => 'required',
            'gender' => 'required',
            'education' => 'required|array',
            'profession' => 'required|array',
            'skill' => 'required|array',
            'language' => 'required|array',
            'cv' => 'required',
        ]);

        $faker = Faker::create();
        $userData = $request->all();
        $userData['full_name'] = $userData['first_name'] . ' ' . $userData['last_name'];
        $userData['code'] = $userData['gender'][0] . '-' . $faker->regexify('[a-z0-9]{8}');
        $user = User::create(array_merge($userData, [
            'education' => json_encode($userData['education']),
            'profession' => json_encode($userData['profession']),
            'skill' => json_encode($userData['skill']),
            'language' => json_encode($userData['language']),
        ]));

        return $user;
    }
}
