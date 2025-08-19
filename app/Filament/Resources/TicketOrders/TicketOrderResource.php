<?php

namespace App\Filament\Resources\TicketOrders;

use App\Filament\Resources\TicketOrders\Pages\CreateTicketOrder;
use App\Filament\Resources\TicketOrders\Pages\EditTicketOrder;
use App\Filament\Resources\TicketOrders\Pages\ListTicketOrders;
use App\Filament\Resources\TicketOrders\Schemas\TicketOrderForm;
use App\Filament\Resources\TicketOrders\Tables\TicketOrdersTable;
use App\Models\TicketOrder;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TicketOrderResource extends Resource
{
    protected static ?string $model = TicketOrder::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Orders';

    public static function form(Schema $schema): Schema
    {
        return TicketOrderForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TicketOrdersTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListTicketOrders::route('/'),
            'create' => CreateTicketOrder::route('/create'),
            'edit' => EditTicketOrder::route('/{record}/edit'),
        ];
    }
}
