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

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/checkout', [CheckOutController::class, 'index'])->name('checkout');

Route::get('/event', fn() => [])->name('event');

Route::post('/processPayment', [CheckOutController::class, 'process'])->name('processPayment');

Route::get('processPayment', [CheckOutController::class, 'index']);

Route::get('/payment/callback', [App\Http\Controllers\PaymentController::class, 'stripeCallback'])
    ->name('payment.stripe.callback');

//TODO:: remove after testing
Route::get('testMail', function () {
    return view('mail.recept', ['metadata' => [
        'ticket_id' => 123,
        'quantity' => 2,
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'test@example.com',
        'receipt_email' => 'test@example.com',
        'phone_number' => '08000000000',
        'payment_intent_id' => 'pi_3RXs9SGLt97pNKrR08twJuN3',
    ]]);
});



// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
