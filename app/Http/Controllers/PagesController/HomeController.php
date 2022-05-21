<?php

namespace App\Http\Controllers\PagesController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function home()
    {
        return Inertia::render('Home', ["title" => "Home"]);
    }

    public function login()
    {
        return Inertia::render('Login', ["title" => "Login"]);
    }

    public function sobre()
    {
        return Inertia::render('Sobre', ["title" => "Sobre"]);
    }
}
