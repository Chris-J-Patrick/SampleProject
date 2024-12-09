<?php

use App\Http\Controllers\PersonController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

route::get('/projects', [ProjectController::class, 'index']);
route::get('/projects/{id}', [ProjectController::class, 'show']);

route::get('/people/{name}/projects', [PersonController::class, 'projects']);
route::get('/people/team-members', [PersonController::class, 'index']);
