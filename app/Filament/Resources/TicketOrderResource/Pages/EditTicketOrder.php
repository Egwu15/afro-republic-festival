<?php

namespace App\Filament\Resources\TicketOrderResource\Pages;

use App\Filament\Resources\TicketOrderResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTicketOrder extends EditRecord
{
    protected static string $resource = TicketOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
