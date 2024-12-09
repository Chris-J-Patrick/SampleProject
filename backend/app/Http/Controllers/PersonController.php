<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\Project;

class PersonController extends Controller
{
    // Returns all team members
    public function index()
    {
        try {
            $teamMembers = Person::all()->pluck('name')->map(function ($name) {
                return ['name' => $name];
            });

            return response()->json($teamMembers);

        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to get all team members'], 500);
        }
    }

    // Returns all Projects belonging to a Person, using a Person's name
    public function projects($name)
    {
        try {
            $query = Project::with('tasks.person');

            $query->whereHas('tasks.person', function ($q) use ($name) {
                $q->where('name', $name);
            });

            $projects = $query->get()->map(function ($project) use ($name) {
                $members = $project->tasks->pluck('person.name')->unique()->values()->map(function ($member) {
                    return ['name' => $member];
                });
                $totalHours = $project->tasks->sum('estimated_hours');

                return [
                    'project_name' => $project->name,
                    'members' => $members,
                    'estimated_hours' => $totalHours,
                    'id' => $project->id,
                ];
            });

            return response()->json($projects);

        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to get Projects belonging to name'], 500);
        }
    }
}
