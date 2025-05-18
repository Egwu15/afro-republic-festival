<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        $checkout = [
            'ticket' => $request->ticket,
            'quantity' => $request->quantity,
        ];


        session(['checkout' => $checkout]);

        return redirect()->route('checkout');
    }
}
