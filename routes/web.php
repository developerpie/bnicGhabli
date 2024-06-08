<?php

use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\NFTController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    if (!Auth::check()) {
        return redirect()->route('user.login');
    } else {
        return redirect()->route('dashboard.index');
    }
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::auto('/user', 'UserController');
Route::auto('/dashboard', 'DashboardController', [
    'middleware' => ['auth', 'verified']
]);
Route::auto('/daos', 'DaoController');


Route::post('/nft/storeData', [NFTController::class, 'storeData'])->name('nft.storeData');
Route::any('/nft/privateMintNFT', [NFTController::class, 'privateMintNFT'])->name('nft.privateMintNFT');

Route::get('/ggg', function () {
    dd(config('app.mail_host'));
});

Route::post('/upload', [FileUploadController::class, 'upload'])->name('upload');
