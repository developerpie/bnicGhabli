<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Dashboard', ['title' => 'Dashboard']);
    }
    public function public($id)
    {
        $user = User::find($id);
        return Inertia::render('Dashboard/Dashboard', ['title' => 'Dashboard', 'user' => $user]);
    }
}
