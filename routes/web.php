<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::redirect('/','/login');
Route::prefix("prototype")->group(function () {
    route::get("/login", function(){
        return Inertia::render('Prototype/Login');
    })->name("prototype.login");
    route::get("/register", function(){
        return Inertia::render('Prototype/Register');
    })->name("prototype.register");
    route::get("/dashboard", function(){
        return Inertia::render('Prototype/Dashboard');
    })->name("prototype.dashboard");
    route::get("/subscription", function(){
        return Inertia::render('Prototype/Subscription');
    })->name("prototype.subscription");
    route::get("/movie/{slug}", function(){
        return Inertia::render('Prototype/Movie/Show');
    })->name("prototype.show");
});

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';