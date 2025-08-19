<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->foreignId('event_id')->after('id')->constrained()->cascadeOnDelete();
            $table->dateTime('sales_start')->nullable()->after('quantity');
            $table->dateTime('sales_end')->nullable()->after('sales_start');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->dropForeign('tickets_event_id_foreign');
            $table->dropColumn('event_id');
            $table->dropColumn('sales_start');
            $table->dropColumn('sales_end');
        });
    }
};
