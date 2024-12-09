<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{

    protected $fillable = ['name'];

    // Each Person can have many tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
