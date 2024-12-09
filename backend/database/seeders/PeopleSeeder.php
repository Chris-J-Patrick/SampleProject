<?php

namespace Database\Seeders;

use App\Models\Person;
use Illuminate\Database\Seeder;

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
