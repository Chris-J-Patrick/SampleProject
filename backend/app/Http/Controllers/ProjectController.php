<?php

namespace App\Http\Controllers;

use App\Models\Project;

class ProjectController extends Controller
{
    // Returns all projects with all project info
    public function index()
    {
        try {
            $projects = Project::with('tasks.person')->get()->map(function ($project) {
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
            return response()->json(['error' => "Failed to fetch Projects"], 500);
        }
    }

    public function show($id)
    {
        try {
            $project = Project::with('tasks.person')->findOrFail($id);
            $totalHours = $project->tasks->sum('estimated_hours');
            $members = $project->tasks->pluck('person.name')->unique()->values()->map(function ($person) {
                return [
                    'name' => $person,
                ];
            });

            $taskData = $project->tasks->map(function ($task) {
                return [
                    'task_name' => $task->name,
                    'assigned_to' => $task->person->name,
                    'estimated_hours' => $task->estimated_hours,
                ];
            });

            return response()->json([
                'project_name' => $project->name,
                'total_hours' => $totalHours,
                'members' => $members,
                'tasks' => $taskData,
            ]);

        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to fetch project by ID'], 500);
        }
    }
}
