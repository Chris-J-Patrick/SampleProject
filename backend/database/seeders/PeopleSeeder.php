<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $people = ['Stuart', 'Tyler', 'Adam', 'Lan'];

        foreach ($people as $name) {
            Person::create(['name' => $name]);
        }
    }
}
