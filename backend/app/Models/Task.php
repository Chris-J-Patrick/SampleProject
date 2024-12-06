<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'person_id', 'name', 'estimated_hours'];

    // Task belongs to a project 
    public function project() {
        return $this->belongsTo(Project::class);
    }

    // Task can only be assigned to 1 Person
    public function person() {
        return $this->belongsTo(Person::class);
    }


}
