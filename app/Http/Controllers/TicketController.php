<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index(Event $event)
    {
        $tickets = $event->tickets()->latest()->get();
        return response()->json($tickets);
    }

    public function show(Event $event, Ticket $ticket)
    {
        return response()->json($ticket);
    }

    public function store(Request $request, Event $event)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'color' => 'nullable|string|max:50',
            'quantity' => 'required|integer|min:1',
            'sales_start' => 'nullable|date',
            'sales_end' => 'nullable|date|after_or_equal:sales_start',
        ]);

        $validated['event_id'] = $event->id;

        $ticket = Ticket::create($validated);

        return response()->json($ticket, 201);
    }

    public function update(Request $request, Event $event, Ticket $ticket)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string',
            'description' => 'nullable|string',
            'price' => 'sometimes|numeric|min:0',
            'color' => 'nullable|string|max:50',
            'quantity' => 'sometimes|integer|min:1',
            'sales_start' => 'nullable|date',
            'sales_end' => 'nullable|date|after_or_equal:sales_start',
        ]);

        $ticket->update($validated);

        return response()->json($ticket);
    }

    public function destroy(Event $event, Ticket $ticket)
    {
        $ticket->delete();
        return response()->json(['message' => 'Ticket deleted successfully']);
    }
}
