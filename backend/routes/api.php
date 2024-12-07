<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PersonController;

route::get('/projects', [ProjectController::class, 'index']);
route::get('/projects/{id}', [ProjectController::class, 'show']);

route::get('/people/{name}/projects', [PersonController::class, 'projects']);
route::get('/people/team-members', [PersonController::class, 'index']);