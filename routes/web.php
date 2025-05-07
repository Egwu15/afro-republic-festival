<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Ticket;

Route::get('/', function () {
    $tickets = Ticket::all();
    return Inertia::render('Homepage', compact('tickets'));
})->name('home');

Route::get('/ticket/{ticket}', function (Ticket $ticket) {
    $formattedDate = Carbon::now()->format('d-m-Y');
    return Inertia::render('TicketPage', compact('ticket', 'formattedDate'));
})->name('TicketPage');



// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
