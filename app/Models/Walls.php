<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comment;
use App\Models\User;

class Walls extends Model
{
    use HasFactory;
    protected $table = 'wall';
    protected $fillable = [
        'user_id',
        'title',
        'file_name',
        'content',
        'color',
        'liked',
        'data_like',
        'created_at',
        'updated_at',
    ];
    
    public function comments()
    {
        return $this->hasMany(Comment::class, 'target_id', 'id');
    }

    public function users()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}