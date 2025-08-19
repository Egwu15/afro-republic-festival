# Database Relationships Summary

This document summarizes the relationships defined in the database migrations for the Afro Republic project.

## Tables and Their Relationships

### 1. events
- **Migration File**: `2025_08_09_081742_create_events_table.php`
- **Description**: Stores information about events
- **Fields**:
  - `id` (primary key)
  - `name` (string)
  - `slug` (string, unique)
  - `description` (text, nullable)
  - `location` (string, nullable)
  - `start_date` (datetime)
  - `end_date` (datetime, nullable)
  - `status` (enum: 'draft', 'published', 'archived', default: 'draft')
  - `image` (string, nullable)
  - `timestamps` (created_at, updated_at)
- **Relationships**:
  - Has many `tickets` (one-to-many relationship)

### 2. tickets
- **Migration File**: `2025_05_04_221547_create_tickets_table.php` and `2025_08_09_081842_add_event_id_to_tickets_table.php`
- **Description**: Stores information about available tickets for events
- **Fields**:
  - `id` (primary key)
  - `event_id` (foreign key to events.id)
  - `name` (text)
  - `description` (text)
  - `price` (decimal)
  - `color` (text)
  - `quantity` (unsigned medium integer)
  - `sales_start` (datetime, nullable)
  - `sales_end` (datetime, nullable)
  - `timestamps` (created_at, updated_at)
- **Relationships**:
  - Belongs to `events` (many-to-one relationship)
  - Has many `ticket_orders` (one-to-many relationship)
  - Foreign key constraint: `event_id` references `id` on `events` table with cascade on delete

### 3. ticket_orders
- **Migration File**: `2025_06_08_224400_create_ticket_orders_table.php` and `2025_08_09_081939_add_user_id_to_ticket_orders_table.php`
- **Description**: Stores information about ticket orders made by customers
- **Fields**:
  - `id` (primary key)
  - `user_id` (foreign key to users.id, nullable)
  - `ticket_id` (foreign key to tickets.id)
  - `first_name` (string)
  - `last_name` (string)
  - `email` (string)
  - `phone_number` (string)
  - `quantity` (integer, default: 1)
  - `amount` (big integer)
  - `currency` (string, default: 'NGN')
  - `payment_intent_id` (string, unique)
  - `status` (string, default: 'paid')
  - `timestamps` (created_at, updated_at)
- **Relationships**:
  - Belongs to `tickets` (many-to-one relationship)
  - Belongs to `users` (many-to-one relationship, nullable)
  - Foreign key constraint: `ticket_id` references `id` on `tickets` table with cascade on delete
  - Foreign key constraint: `user_id` references `id` on `users` table with null on delete

### 4. users
- **Migration File**: `0001_01_01_000000_create_users_table.php`
- **Description**: Stores user account information
- **Fields**:
  - `id` (primary key)
  - `name` (string)
  - `email` (string, unique)
  - `email_verified_at` (timestamp, nullable)
  - `password` (string)
  - `remember_token` (string)
  - `timestamps` (created_at, updated_at)
- **Relationships**:
  - Has many `sessions` (one-to-many relationship)
  - Has many `ticket_orders` (one-to-many relationship)

### 5. password_reset_tokens
- **Migration File**: `0001_01_01_000000_create_users_table.php` (same file as users)
- **Description**: Stores tokens for password reset functionality
- **Fields**:
  - `email` (string, primary key)
  - `token` (string)
  - `created_at` (timestamp, nullable)
- **Relationships**:
  - No direct foreign key relationships

### 6. sessions
- **Migration File**: `0001_01_01_000000_create_users_table.php` (same file as users)
- **Description**: Stores user session information
- **Fields**:
  - `id` (string, primary key)
  - `user_id` (foreign key to users.id, nullable, indexed)
  - `ip_address` (string, nullable)
  - `user_agent` (text, nullable)
  - `payload` (long text)
  - `last_activity` (integer, indexed)
- **Relationships**:
  - Belongs to `users` (many-to-one relationship)
  - Foreign key constraint: `user_id` references `id` on `users` table

## Model Relationships

### Event Model
- **File**: `app/Models/Event.php`
- **Relationships**:
  - Has many `Ticket` via `tickets()` method

### Ticket Model
- **File**: `app/Models/Ticket.php`
- **Relationships**:
  - Belongs to `Event` via `event()` method
  - Has many `TicketOrder` via `orders()` method

### TicketOrder Model
- **File**: `app/Models/TicketOrder.php`
- **Relationships**:
  - Belongs to `Ticket` via `ticket()` method
  - Belongs to `User` via `user()` method

### User Model
- **File**: `app/Models/User.php`
- **Relationships**:
  - Has many `TicketOrder` via `ticketOrders()` method

## Relationship Diagram

```
Users (1) ----< Sessions (*)
Users (1) ----< TicketOrders (*)
  
Events (1) ----< Tickets (1) ----< TicketOrders (*)
```

This diagram shows:
- A one-to-many relationship between Users and Sessions
- A one-to-many relationship between Users and TicketOrders
- A one-to-many relationship between Events and Tickets
- A one-to-many relationship between Tickets and TicketOrders
