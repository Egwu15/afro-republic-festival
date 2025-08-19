<?php

namespace App\Http\Controllers;

use App\Models\TicketOrder;

class TicketOrderController extends Controller
{
    public function index()
    {
        $orders = TicketOrder::with('ticket')->latest()->get();
        return view('orders.index', compact('orders'));
    }

    public function show(TicketOrder $order)
    {
        $order->load('ticket');
        return view('orders.show', compact('order'));
    }
}
