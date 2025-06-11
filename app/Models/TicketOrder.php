<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TicketOrder extends Model
{
    protected $fillable = [
        "ticket_id",
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "quantity",
        "amount",
        "currency",
        "payment_intent_id",
        "status",
    ];

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }
}

