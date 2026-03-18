import { NextResponse } from 'next/server';

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY || "csk-khptep54t5khmnrkrkwmhdrkjc3wevptjx8ptp8xcnd2frhr";

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        // Simple, conversational system prompt
        const systemPrompt = `You are WhizAI, the intelligent assistant for WhizCrow - an Online Reputation Management agency.

BRAND IDENTITY:
- We treat "Reputation = Revenue" - reputation is a financial asset, not a cost center
- We're NOT a PR agency - we're an Online Reputation Management (ORM) agency

OUR SOLUTIONS:
1. Online Reputation Management (ORM): Negative content removal, SERP dominance, 24/7 monitoring
2. Digital PR: Tier-1 media placements, executive positioning, crisis communications
3. Content Seeding: Wikipedia management, authority asset creation
4. Community Moderation: Reddit/forum monitoring, review management
5. Legal Takedowns: DMCA, defamation support, right-to-be-forgotten
6. Crisis Response: 48-hour containment, war room activation

KEY STATS:
- 417% Average ROI, $4.2B+ protected, 100% crisis success rate
- 30+ platforms managed (Google, Reddit, Trustpilot, etc.)
- Starting at $15K/month for comprehensive ORM

YOUR PERSONALITY:
- Helpful and professional, not pushy
- Focus on understanding their challenges first
- Ask smart qualifying questions naturally
- When they seem serious/qualified, NATURALLY ask for contact info to schedule a call
- Keep responses concise (2-3 sentences max)

CONTACT INFO COLLECTION:
- Don't force it immediately - have a real conversation first
- When appropriate (they show interest, ask about pricing, describe a problem), say something like:
  "I'd love to connect you with our team. What's the best email to reach you at?"
- If they provide contact info, acknowledge it warmly and offer to schedule a consultation

Be genuinely helpful. Answer questions. Build rapport. Then collect contact info naturally.`;

        try {
            // Call Cerebras API
            const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CEREBRAS_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "llama3.1-8b",
                    messages: [
                        { role: "system", content: systemPrompt },
                        ...history.slice(-6).map((msg: any) => ({
                            role: msg.role === "agent" ? "assistant" : "user",
                            content: msg.content
                        })),
                        { role: "user", content: message }
                    ],
                    temperature: 0.7,
                    max_tokens: 300
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Cerebras API error: ${response.status}`, errorText);
                throw new Error(`Cerebras API error: ${response.status}`);
            }

            const data = await response.json();
            let reply = data.choices[0].message.content;

            // Ensure response isn't too long (max 3 sentences)
            const sentences = reply.split(/[.!?]+/).filter((s: string) => s.trim());
            if (sentences.length > 3) {
                reply = sentences.slice(0, 3).join('. ') + '.';
            }

            // Add artificial delay for more natural feel (1-2 seconds)
            const delay = 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));

            return NextResponse.json({ reply });

        } catch (apiError: any) {
            console.error("Cerebras API Error:", apiError);
            console.error("Error details:", apiError.message);

            // Fallback to intelligent responses
            const lowerMsg = message.toLowerCase();
            let reply = "";

            if (lowerMsg.includes("price") || lowerMsg.includes("cost")) {
                reply = "Our ORM starts at $15K/month with 417% average ROI. What's your biggest reputation challenge right now?";
            } else if (lowerMsg.includes("service")) {
                reply = "We offer ORM, Digital PR, Crisis Response, and Legal Takedowns across 30+ platforms. What brings you to WhizCrow today?";
            } else if (lowerMsg.includes("crisis") || lowerMsg.includes("emergency")) {
                reply = "We contain crises in 48 hours with 100% success. What's the situation? I can connect you with our rapid response team.";
            } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
                reply = "Hi! I'm WhizAI, your WhizCrow assistant. What brings you here today - reputation building or crisis management?";
            } else {
                reply = "I help businesses protect their reputation and revenue. What challenges are you facing?";
            }

            // Add delay for fallback responses too
            const delay = 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));

            return NextResponse.json({ reply });
        }

    } catch (error: any) {
        console.error("WhizAI Error:", error);
        console.error("Error stack:", error.stack);
        return NextResponse.json({
            reply: "I'm experiencing a connection issue. Please email hello@whizcrow.com for immediate help."
        }, { status: 500 });
    }
}
