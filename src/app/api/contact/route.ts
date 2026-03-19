import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend is initialized inside the handler so it only runs at request time

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const formData = await req.formData();

        // Extract form fields
        const fname = formData.get('fname') as string;
        const lname = formData.get('lname') as string || '';
        const email = formData.get('email') as string;
        const service = formData.get('service') as string || 'Not specified';
        const budget = formData.get('budget') as string || 'Not specified';
        const message = formData.get('message') as string;

        // Basic validation
        if (!fname || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // HTML format for the email
        const htmlBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
                <h2 style="color: #2DBD5A;">New Contact Request (AccelviaTeams)</h2>
                <p><strong>From:</strong> ${fname} ${lname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Interested In:</strong> ${service}</p>
                <p><strong>Budget Range:</strong> ${budget}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <h3 style="margin-bottom: 10px;">Message:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.5;">${message}</p>
            </div>
        `;

        // Send the email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Resend test email or verified domain
            to: ['musfiqurrahmansqa@gmail.com'], // Temporary destination email
            replyTo: email,
            subject: `New Project Inquiry from ${fname} ${lname}`,
            html: htmlBody,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json(
            { success: true, message: 'Message sent successfully.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send message.' },
            { status: 500 }
        );
    }
}
