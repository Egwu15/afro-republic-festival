<?php

use App\Http\Controllers\CheckOutController;
use App\Http\Controllers\TicketController;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $tickets = Ticket::all();
    return Inertia::render('Homepage', compact('tickets'));
})->name('home');

Route::get('/ticket/{ticket}', function (Ticket $ticket) {
    $formattedDate = Carbon::now()->format('d-m-Y');
    return Inertia::render('TicketPage', compact('ticket', 'formattedDate'));
})->name('TicketPage');

Route::post('/ticket', [TicketController::class, 'store'])->name('ticket.store');

Route::get('/checkout', [CheckOutController::class, 'index'])->name('checkout');


// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
