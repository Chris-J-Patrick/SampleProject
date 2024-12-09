<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

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
