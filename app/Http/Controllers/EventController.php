<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Carbon\Carbon;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {


        $events = Event::where('end_date', '>=', Carbon::now())
            ->where('status', 'published')
            ->whereHas('tickets')
            ->withMin('tickets', 'price')
            ->get();

        return Inertia::render('event/Event', compact('events'));
    }

    public function show(Event $event)
    {


        $event->load('tickets')
            ->loadMin('tickets', 'price');

        return Inertia::render(
            'event/SingleEvent',
            ['event' => $event]
        );
    }


}
