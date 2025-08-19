<html>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
<table cellpadding="0" cellspacing="0"
       style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"
       width="100%">
    <tr>
        <td>
            <h2 style="color: #2c3e50;">Hello {{ $data['first_name'] }} {{ $data['last_name'] }},</h2>
            <p>Thank you for purchasing a ticket! We're excited to have you join us.</p>

            <table cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                    <td style="font-weight: bold;">Refcode:</td>
                    <td>{{ $data['payment_intent_id'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Ticket ID:</td>
                    <td>{{ $data['ticket']['name'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Quantity:</td>
                    <td>{{ $data['quantity'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Email:</td>
                    <td>{{ $data['email'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Total:</td>
                    <td>{{ $data['amount'] }}</td>
                </tr>
            </table>

            <p>Please keep this email as proof of your purchase. You will receive further updates as necessary.</p>

            <p style="margin-top: 40px;">Best regards,<br><strong>AfroRepublick Event Team</strong></p>
        </td>
    </tr>
</table>
</body>
</html>
