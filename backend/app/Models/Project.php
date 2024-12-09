<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name'];

    // Each project can have many tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
