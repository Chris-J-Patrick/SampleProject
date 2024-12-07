<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller 
{

    // Returns all team members 
    public function index() {
        $teamMembers = Person::all()->pluck('name');
        return response()->json($teamMembers);
    }

    // Returns all Projects belonging to a Person, using a Person's name
    public function projects($name) 
    {

        $query = Project::with('tasks.person');

        $query->whereHas('tasks.person', function ($q) use ($name) {
            $q->where('name', $name);
        });

        $projects = $query->get()->map(function ($project) use ($name) {
            $members = $project->tasks->pluck('person.name')->unique()->values();
            $totalHours = $project->tasks->sum('estimated_hours');
            return [
                'project_name' => $project->name,
                'members' => $members,
                'estimated_hours' => $totalHours, 
                'id' => $project->id
            ];
        });
        return response()->json($projects);
    }
    
}
