<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Event extends Model
{
    protected $fillable = [
        'name', 'slug', 'description', 'location',
        'start_date', 'end_date', 'status', 'image'
    ];
    protected $appends = ['eventStartDate', 'eventEndDate'];
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }

    public function getEventStartDateAttribute(): string
    {
        return $this->asDateTime($this->start_date)
            ->setTimezone('Europe/London')
            ->format('l jS M Y');

    }

    public function getEventEndDateAttribute(): string
    {
        return $this->asDateTime($this->start_date)
            ->setTimezone('Europe/London')
            ->format('l jS M Y');
    }

}
