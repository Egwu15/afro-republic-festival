<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Inertia\Inertia;

class CheckOutController extends Controller
{
    public function index()
    {

        $data = session('checkout');
        if ($data == null) {
            return redirect()->route('home');
        }

        $ticket = Ticket::findOrFail($data['ticket']);
        if ($ticket == null) {
            return redirect()->route('home');
        }


        return Inertia::render('CheckOut', [
            'ticket' => $ticket,
            'quantity' => $data['quantity']
        ]);
    }


}
