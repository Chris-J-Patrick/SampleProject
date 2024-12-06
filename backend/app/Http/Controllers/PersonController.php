<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class PersonController extends Controller{
    // Returns all projects using a Person's name
    public function projects($name){

        $query = Project::with('tasks.person');

        $query->whereHas('tasks.person', function ($q) use ($name) {
            $q->where('name', $name);
        });
        $projects = $query->get()->map(function ($project) use ($name){
            $members = $project->tasks->pluck('person.name')->unique()->values();
            $totalHours = $project->tasks->sum('estimated_hours');

            return [
                'project_name' => $project->name,
                'members' => $members->join(', '), 
                'estimated_hours' => $totalHours, 
                'id' => $project->id
            ];

        });

        return response()->json($projects);
    }
    
}
