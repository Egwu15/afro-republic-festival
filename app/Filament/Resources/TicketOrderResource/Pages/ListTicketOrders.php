<?php

namespace App\Filament\Resources\TicketOrderResource\Pages;

use App\Filament\Resources\TicketOrderResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTicketOrders extends ListRecords
{
    protected static string $resource = TicketOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
