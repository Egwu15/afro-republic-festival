<?php

namespace App\Filament\Resources\Tickets\Schemas;

use Exception;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class TicketForm
{
    /**
     * @throws Exception
     */
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('event_id')
                    ->relationship('event', 'name')
                    ->required(),
                Textarea::make('name')
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('£'),
                ColorPicker::make('color')
                    ->required(),
                TextInput::make('quantity')
                    ->required()
                    ->numeric(),
                DateTimePicker::make('sales_start'),
                DateTimePicker::make('sales_end'),
            ]);
    }
}
