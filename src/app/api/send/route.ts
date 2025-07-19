import { z } from "zod";

// Demo mode - no external API dependencies
const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Demo Contact Form Submission:", body);
    
    // Validate the form data
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    // Simulate processing delay (like a real API)
    await new Promise(resolve => setTimeout(resolve, 500));

    // Demo mode: Always return success
    const demoResponse = {
      id: `demo_${Date.now()}`,
      message: "Demo email sent successfully!",
      data: {
        fullName: zodData.fullName,
        email: zodData.email,
        messageLength: zodData.message.length,
        timestamp: new Date().toISOString(),
      },
      demo: true
    };

    console.log("Demo Response:", demoResponse);
    return Response.json(demoResponse);
    
  } catch (error) {
    console.error("Demo API Error:", error);
    return Response.json({ 
      error: "Demo API error", 
      demo: true 
    }, { status: 500 });
  }
}
