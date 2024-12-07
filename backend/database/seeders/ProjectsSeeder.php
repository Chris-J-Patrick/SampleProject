<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void 
    {
        $projects = ['E-Commerce Website', 'Websocket Updates', 'Angular Upgrade'];

        foreach ($projects as $name) {
            Project::create(['name' => $name]);
        }
    }
}
