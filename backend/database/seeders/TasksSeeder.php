<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person;
use App\Models\Project;
use App\Models\Task;

class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void 
    {
        
        $people = Person::all()->pluck('id', 'name')->toArray();
        $projects = Project::all()->pluck('id', 'name')->toArray();

        $tasks = [
            'Angular Upgrade' => [
                [
                    'person_name' => 'Lan',
                    'name' => 'Upgrade Angular',
                    'estimated_hours' => 15,
                ],
                [
                    'person_name' => 'Stuart',
                    'name' => 'Fix Broken Things',
                    'estimated_hours' => 10,
                ], 
                [
                    'person_name' => 'Lan',
                    'name' => 'Test',
                    'estimated_hours' => 10,
                ], 
            ],
            
            'Websocket Updates' => [
                [
                    'person_name' => 'Stuart',
                    'name' => 'Add to Socket.IO',
                    'estimated_hours' => 2,
                ],
                [
                    'person_name' => 'Stuart',
                    'name' => 'Enable Broadcasting',
                    'estimated_hours' => 5,
                ], 
                [
                    'person_name' => 'Stuart',
                    'name' => 'Adjust Interface',
                    'estimated_hours' => 3,
                ], 
            ],

            'E-Commerce Website' => [
                [
                    'person_name' => 'Adam',
                    'name' => 'Product Pages',
                    'estimated_hours' => 5,
                ],
                [
                    'person_name' => 'Tyler',
                    'name' => 'Shopping Cart',
                    'estimated_hours' => 10,
                ], 
                [
                    'person_name' => 'Adam',
                    'name' => 'My Account',
                    'estimated_hours' => 5,
                ], 
            ],
        ];

        foreach($tasks as $project_name => $project_tasks) {
            $project_id = $projects[$project_name];

            foreach ($project_tasks as $task) {
                Task::create([
                    'project_id' => $project_id,
                    'person_id' => $people[$task['person_name']],
                    'name' => $task['name'],
                    'estimated_hours' => $task['estimated_hours'],
                ]);
            }
        }
    }
}
